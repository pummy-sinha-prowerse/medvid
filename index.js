import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

// const CONNECTION_URL =`mongodb://atlas-sql-64f812e15f672108db12d3a9-tkp3i.a.query.mongodb.net/MedVid?ssl=true&authSource=admin`; // Replace 'mydatabase' with your database name
//   mongoose.connect(CONNECTION_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Mongo has connected succesfully");
// });
// mongoose.connection.on("reconnected", () => {
//   console.log("Mongo has reconnected");
// });
// mongoose.connection.on("error", (error) => {
//   console.log("Mongo connection has an error", error);
//   mongoose.disconnect();
// });
// mongoose.connection.on("disconnected", () => {
//   console.log("Mongo connection is disconnected");
// });
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error('Error occurred while connecting to MongoDB:', err);
//     return;
//   }

//   // You now have a connected MongoDB client in the 'client' variable.
//   const db = client.db(); // Access the database

//   // Perform database operations here...

//   // Close the connection when you're done.
//   client.close();
// });
