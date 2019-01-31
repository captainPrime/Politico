const express = require("express");
const app = express();

const Route4 = require("./routes/getSpecificParty");
const Route2 = require("./routes/allParty");
const Route5 = require("./routes/editParty");

app.use("/api/v1", Route2);
app.use("/api/v1", Route4);
app.use("/api/v1", Route5);

module.exports = app; 