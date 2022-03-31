import express from "express";
import cors from "cors";
import path from "path";
import 'express-async-errors';
import "./connection";
import routes from "./routes";
import errorHandler from "./errors/handler";
import { PORT } from "./config/constantes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(PORT, () => console.log("Express iniciado..."));
