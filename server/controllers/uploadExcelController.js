// const express = require("express");
// const multer = require("multer");
// const xlsx = require("xlsx");
// const path = require("path");
// const fs = require("fs");
// const mysql = require("mysql2/promise");
// const moment = require("moment");

// const app = express();
// const port = 3000;

// // Configure multer for file storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Set upload directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); // Set file name
//   },
// });

// const upload = multer({ storage });

// // Ensure the upload directory exists
// const uploadDir = "uploads/";
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // Configure MySQL database connection
// const dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "Alliswell@12",
//   database: "krishna",
// };

// let db;

// mysql.createConnection(dbConfig).then((connection) => {
//   db = connection;
//   console.log("Connected to MySQL database.");
// }).catch((err) => {
//   console.error("Error connecting to MySQL database:", err);
// });

// // Upload route
// app.post("/upload", upload.single("file"), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }

//   const filePath = path.join(__dirname, req.file.path);
//   const workbook = xlsx.readFile(filePath);
//   const sheetName = workbook.SheetNames[0];
//   const worksheet = workbook.Sheets[sheetName];
//   const jsonData = xlsx.utils.sheet_to_json(worksheet);

//   // Insert data into MySQL database
//   for (const row of jsonData) {
//     await insertData(row, db);
//   }

//   // Optionally delete the uploaded file
//   fs.unlinkSync(filePath);
//   res.send("File uploaded and data saved successfully.");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // Function to insert data into the database
// async function insertData(row, db) {
//   try {
//     const {
//       pro_name,
//       specification,
//       purch_address,
//       quantity,
//       price,
//       total,
//       gst,
//       created_at,
//     } = row;

//     const query = `
//       INSERT INTO purchases
//       (pro_name, specification, purch_address, quantity, price, total, gst, created_at)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//     `;
//     const params = [
//       pro_name,
//       specification,
//       purch_address,
//       quantity,
//       price,
//       total,
//       gst,
//       moment(created_at, "MM/DD/YYYY").format("YYYY-MM-DD"),
//     ];

//     const [results] = await db.query(query, params);

//     if (results.affectedRows === 1) {
//       console.log("Purchase data saved successfully.");
//     } else {
//       console.log("Failed to save purchase data.");
//     }
//   } catch (err) {
//     console.error("Error saving purchase data:", err);
//   }
// }






const express = require("express");
const router = express.Router();
const moment = require("moment");
const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");

module.exports = (db, upload) => {
  router.post("/upload", upload.single("file"), (req, res) => {
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheet_name_list = workbook.SheetNames;
    const jsonData = xlsx.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );

    // console.log("filePath", filePath);
    // console.log("jsonData", jsonData);

    // Insert data into MySQL database
    jsonData.forEach(async (row, index) => {
      console.log("index", index);
      console.log("row", row);
      await insertData(row, db);
    });

    // Delete the uploaded file
    //fs.unlinkSync(filePath);
    res.send("OK");
  });

  return router;
};

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
    } = row;

    const stu_img = "sample_image";

    const apply_date = moment().format("YYYY-MM-DD");

    const saveQuery = `
            INSERT INTO students_master 
            (     pro_name,
       specification,
      purch_address,
       quantity,
      price,
       total,
       gst,) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?,)
        `;
    // var price= excelDateToJSDate(dob);
    const saveParams = [
      pro_name,
      specification,
     purch_address,
      quantity,
     price,
      total,
      gst

    ];

    const [results] = await db.query(saveQuery, saveParams);

    if (results.affectedRows === 1) {
      console.log("Student data saved successfully.");
    } else {
      console.log("Failed to save student data.");
    }
  } catch (err) {
    console.log("Error saving student data:", err);
  }
}

// Function to convert Excel date serial number to JavaScript Date object
const excel = (excelSerialDate) => {
  const daysSince1900 = Math.floor(excelSerialDate);
  const secondsInDay = 86400;
  const seconds = (excelSerialDate - daysSince1900) * secondsInDay;
  const date = new Date(1900, 0, daysSince1900 - 1);
  date.setSeconds(seconds);
  return date;
};
