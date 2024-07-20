const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql2/promise");
const moment = require("moment");

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "Alliswell@12",
  database: "krishna",
};

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Set file name
  },
});

const upload = multer({ storage });

// Ensure the upload directory exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

let db;

mysql.createConnection(dbConfig)
  .then((connection) => {
    db = connection;
    console.log("Connected to MySQL database.");
  })
  .catch((err) => {
    console.error("Error connecting to MySQL database:", err);
  });

// Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const filePath = path.join(__dirname, req.file.path);
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);

  // Insert data into MySQL database
  for (const row of jsonData) {
    await insertData(row, db);
  }

  // Optionally delete the uploaded file
  fs.unlinkSync(filePath);
  res.send("File uploaded and data saved successfully.");
});


// Function to insert data into the database
async function insertData(row, db) {
  try {
    const {
      pro_name,
      specification,
      purch_address,
      quantity,
      price,
      total,
      gst,
      created_at,
    } = row;

    const query = `
      INSERT INTO purchases
      (pro_name, specification, purch_address, quantity, price, total, gst, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      pro_name,
      specification,
      purch_address,
      quantity,
      price,
      total,
      gst,
      moment(created_at, "MM/DD/YYYY").format("YYYY-MM-DD"),
    ];

    const [results] = await db.query(query, params);

    if (results.affectedRows === 1) {
      console.log("Purchase data saved successfully.");
    } else {
      console.log("Failed to save purchase data.");
    }
  } catch (err) {
    console.error("Error saving purchase data:", err);
  }
}
