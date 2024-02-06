const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const db = require("./db/dbInstance");

app.use(cors());

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await db.init();
});

app.get("/listOfCategories", async (req, res) => {
  try {
    const allCategories = await db.getAllCategories();
    res.json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
