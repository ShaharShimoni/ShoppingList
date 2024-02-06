using System.Text.Json;

namespace OrderApi
{
     public class OrderRequest
    {
        public required string Name { get; set; }
        public required string Address { get; set; }
        public required string Email { get; set; }
        public JsonElement Products { get; set; }
    }
}
