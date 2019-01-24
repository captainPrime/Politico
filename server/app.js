import express from "express";
const app = express();

import Route7 from "./routes/addOffice";

app.use("/api/v1", Route7);

export default app;