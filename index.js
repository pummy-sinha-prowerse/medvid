import express from "express";
import "./config/mongo.js";

// const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World of Medvid!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
