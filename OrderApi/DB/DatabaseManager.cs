using MySql.Data.MySqlClient;

namespace OrderApi
{
    public class DatabaseManager
    {
        private readonly string _connectionString;
        private readonly MySqlConnection _connection;

        private static DatabaseManager? _instance;

        private DatabaseManager(string connectionString)
        {
            _connectionString = connectionString;
            _connection = new MySqlConnection(_connectionString);
            _connection.Open();
        }

        public static DatabaseManager GetInstance(string connectionString)
        {
            if (_instance == null)
                {
                    _instance = new DatabaseManager(connectionString);
                }
            return _instance;
        }

        public bool InsertOrder(OrderRequest orderRequest)
        {
            string name = orderRequest.Name;
            string address = orderRequest.Address;
            string email = orderRequest.Email;
            string products = orderRequest.Products.ToString();

            string insertSql = "INSERT INTO Order_Details (name, address, email, products) VALUES (@Name, @Address, @Email,@Products)";
            using MySqlCommand cmd = new MySqlCommand(insertSql, _connection);
            cmd.Parameters.AddWithValue("@Name", name);
            cmd.Parameters.AddWithValue("@Address", address);
            cmd.Parameters.AddWithValue("@Email", email);
            cmd.Parameters.AddWithValue("@Products", products);

            try
            {
                int rowsAffected = cmd.ExecuteNonQuery();
                return rowsAffected > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }
    }
}
