const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

class DatabaseSingleton {
  constructor() {
    this.db = null;
  }

  async init() {
    try {
      this.db = await mysql.createConnection({
        host: "mysql-3b86ab43-shopping-list.a.aivencloud.com",
        port: "12298",
        database: "ShoppingList",
        user: "avnadmin",
        password: "AVNS_2YhLIfOzajVuSGvILuh",
      });
      console.log("Connection Success to DB !");
    } catch (e) {
      console.log("Connection failed to DB", e);
    }
  }

  static getInstance() {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }
    return DatabaseSingleton.instance;
  }

  async getAllCategories() {
    try {
      const query = "SELECT * FROM Categories";
      const [result] = await this.db.execute(query);
      const categories = result.map((row) => ({ ...row }));
      return categories;
    } catch (error) {
      console.error("Error executing database query:", error);
      throw error;
    }
  }
}

const db = DatabaseSingleton.getInstance();
module.exports = db;
