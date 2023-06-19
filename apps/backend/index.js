import express from "express";

import instagramRouter from "./routes/instagram.js";
import usersRouter from "./routes/user.js";
import dashboardRouter from './routes/dashboard.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/sm-instagram", instagramRouter);
app.use("/", dashboardRouter);

export default app;
