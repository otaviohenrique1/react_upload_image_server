import { Router } from "express";
import itemController from "./controllers/ItemController";
import multer from "multer";
import uploadConfig from "./config/uploads";

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/item', itemController.index);
routes.get('/item/:id', itemController.show);
routes.post('/item', upload.array('imagens'), itemController.create);
routes.put('/item/:id', upload.array('imagens'), itemController.update);
routes.delete('/item/:id', itemController.delete);

export default routes;
