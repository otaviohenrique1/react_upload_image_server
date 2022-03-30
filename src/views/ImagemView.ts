import { Imagem } from "../entity/Imagem";

export default {
  render(imagem: Imagem) {
    return {
      id: imagem.id,
      url: `http://192.168.0.12:3333/uploads/fotos/${imagem.path}`,
    };
    // url: `http://localhost:3333/uploads/${image.path}`,
  },

  renderMany(imagens: Imagem[]) {
    return imagens.map(imagem => this.render(imagem));
  }
};