import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { MensagemCampoVazio } from "../config/utils";
import Item from "../entity/Item";
import itemView from "../views/ItemView";

export default {
  async index(request: Request, response: Response, next: NextFunction) {
    const itemRepository = getRepository(Item);
    const refeicao = await itemRepository.find({ relations: ['imagem'] });
    return response.json(itemView.renderMany(refeicao));
  },
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const itemRepository = getRepository(Item);
    const item = await itemRepository.findOneOrFail(id, { relations: ['imagem'] });
    return response.json(itemView.render(item));
  },
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome } = request.body;
    const itemRepository = getRepository(Item);
    const requestImagens = request.files as Express.Multer.File[];
    const imagens = requestImagens.map((imagem) => {
      return { path: imagem.filename };
    });
    const data = { nome, imagens };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      imagens: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(MensagemCampoVazio('path'))
        })
      )
    });
    await schema.validate(data, { abortEarly: false });
    const item = itemRepository.create(data);
    await itemRepository.save(item);
    return response.status(201).json(item);
  },
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const itemRepository = getRepository(Item);
    const item = await itemRepository.delete(id);
    return response.status(200).json(item);
  },
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome } = request.body;
    const itemRepository = getRepository(Item);
    const requestImagens = request.files as Express.Multer.File[];
    const imagens = requestImagens.map((imagem) => {
      return { path: imagem.filename };
    });
    const data = { nome, imagens };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      imagem: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(MensagemCampoVazio('path'))
        })
      )
    });
    await schema.validate(data, { abortEarly: false });
    const item = await itemRepository.update(id, data);
    return response.status(201).json(item);
  },
};
