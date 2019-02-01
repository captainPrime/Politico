const express = require("express");
const app = express();

const Route2 = require("./routes/allParty");

app.use("/api/v1", Route2);

module.exports = app; 
