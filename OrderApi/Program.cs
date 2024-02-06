namespace OrderApi
{
    class Program
    {
        static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            host.Run();
        }

        static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder
                        .UseKestrel()
                        .ConfigureServices((context, services) =>
                        {
                            ConfigureServices(context.Configuration, services);
                        })
                        .Configure(app =>
                        {
                            ConfigureApplication(app);
                        });
                });

        static void ConfigureServices(IConfiguration configuration, IServiceCollection services)
        {
            services.AddRouting();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowLocalhost3000", builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            string connectionString = "Server=mysql-3b86ab43-shopping-list.a.aivencloud.com;Port=12298;Database=ShoppingList;User=avnadmin;Password=AVNS_2YhLIfOzajVuSGvILuh;";
            services.AddSingleton(DatabaseManager.GetInstance(connectionString));
        }

        static void ConfigureApplication(IApplicationBuilder app)
        {
            app.UseCors("AllowLocalhost3000");
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapPost("/api/orders", async context =>
                {
                    var orderRequest = await context.Request.ReadFromJsonAsync<OrderRequest>();
                    if (orderRequest == null)
                    {
                        context.Response.StatusCode = 400;
                        await context.Response.WriteAsync("Invalid request body.");
                        return;
                    }

                    var databaseManager = app.ApplicationServices.GetRequiredService<DatabaseManager>();
                    bool success = databaseManager.InsertOrder(orderRequest);
                    if (success)
                    {
                        await context.Response.WriteAsync("Order created successfully.");
                    }
                    else
                    {
                        await context.Response.WriteAsync("Failed to create the order.");
                    }
                });
            });
        }
    }
}
