import express from "express";
const app = express();

import Route7 from "./routes/addNewOffice";
import Route8 from "./routes/addNewParty";
import Route6 from "./routes/deleteParty";
import Route5 from "./routes/getAllParty";
import Route4 from "./routes/editParty";
import Route3 from "./routes/getAllOffices";
import Route2 from "./routes/getSpecificOffice";
import Route1 from "./routes/getSpecificParty";

app.use("/api/v1", Route8);
app.use("/api/v1", Route7);
app.use("/api/v1", Route6);
app.use("/api/v1", Route5);
app.use("/api/v1", Route4);
app.use("/api/v1", Route3);
app.use("/api/v1", Route2);
app.use("/api/v1", Route1);

export default app;
