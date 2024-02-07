const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

class DatabaseSingleton {
  constructor() {
    this.sequelize = null;
    this.Category = null;
  }

  async init() {
    try {
      this.sequelize = new Sequelize({
        dialect: "mysql",
        host: "mysql-3b86ab43-shopping-list.a.aivencloud.com",
        port: 12298,
        database: "ShoppingList",
        username: "avnadmin",
        password: "AVNS_2YhLIfOzajVuSGvILuh",
        define: {
          timestamps: false,
        },
      });

      this.Category = this.sequelize.define("Category", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        category_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
      await this.Category.sync();
      console.log("Connection Success to DB!");
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
      const categories = await this.Category.findAll();
      return categories;
    } catch (error) {
      console.error("Error executing database query:", error);
      throw error;
    }
  }
}

const db = DatabaseSingleton.getInstance();
module.exports = db;
