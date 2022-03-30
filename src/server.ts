import express from "express";
import cors from "cors";
import path from "path";
import 'express-async-errors';
import "./connection";
import routes from "./routes";
import errorHandler from "./errors/handler";
// import createError from "http-errors";
// import morgan from "morgan";
// import multer from "multer";
import { PORT } from "./config/constantes";
// import { MULTER_OPTIONS_DEST } from "./config/constantes";
// const upload = multer({ dest: MULTER_OPTIONS_DEST })

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(PORT, () => console.log("Express iniciado..."));

/*
  colocar no form para que o multer consiga processar -> enctype="multipart/form-data"
  <form action="/profile" method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" />
  </form>
*/