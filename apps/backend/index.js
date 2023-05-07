import express from "express";

import instagramRouter from "./routes/instagram.js";
import usersRouter from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/sm-instagram", instagramRouter);

export default app;
