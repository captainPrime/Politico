const express = require("express");
const app = express();

const Route4 = require("./routes/getSpecificParty");
const Route3 = require("./routes/addParty");
const Route2 = require("./routes/allParty");
const Route1 = require("./routes/deleteParty");
const Route5 = require("./routes/editParty");
const Route6 = require("./routes/getSpecificOffice");
const Route8 = require("./routes/allOffices");

app.use("/api/v1", Route2);
app.use("/api/v1", Route4);
app.use("/api/v1", Route3);
app.use("/api/v1", Route1);
app.use("/api/v1", Route5);
app.use("/api/v1", Route6);
app.use("/api/v1", Route8);

module.exports = app; 