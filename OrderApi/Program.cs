using MySql.Data.MySqlClient;
using System.Text.Json;

namespace OrderApi
{
    public class OrderRequest
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public JsonElement Products { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            IWebHost host = new WebHostBuilder()
                .UseKestrel()
                .ConfigureServices((context, services) =>
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
                })
                .Configure(app =>
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

                            string name = orderRequest.Name;
                            string address = orderRequest.Address;
                            string email = orderRequest.Email;
                            string products = orderRequest.Products.ToString();

                            string connectionString = "Server=mysql-3b86ab43-shopping-list.a.aivencloud.com;Port=12298;Database=ShoppingList;User=avnadmin;Password=AVNS_2YhLIfOzajVuSGvILuh;";
                            using MySqlConnection connection = new MySqlConnection(connectionString);
                            connection.Open();
                            string insertSql = "INSERT INTO Order_Details (name, address, email, products) VALUES (@Name, @Address, @Email,@Products)";

                            using MySqlCommand cmd = new MySqlCommand(insertSql, connection);
                            cmd.Parameters.AddWithValue("@Name", name);
                            cmd.Parameters.AddWithValue("@Address", address);
                            cmd.Parameters.AddWithValue("@Email", email);
                            cmd.Parameters.AddWithValue("@Products", products);
                            try
                            {
                                int rowsAffected = cmd.ExecuteNonQuery();
                                if (rowsAffected > 0)
                                {
                                    await context.Response.WriteAsync("Order created successfully.");
                                }
                                else
                                {
                                    await context.Response.WriteAsync("Failed to create the order.");
                                }
                            }
                            catch (Exception ex)
                            {
                                Console.WriteLine(ex);
                                await context.Response.WriteAsync($"Error: {ex.Message}");
                            }
                        });
                    });
                })
                .Build();

            host.Run();
        }
    }
}
