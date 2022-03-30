import Item from "../entity/Item";
import ImagemView from "./ImagemView";

export default {
  render(itens: Item) {
    return {
      id: itens.id,
      nome: itens.nome,
      images: ImagemView.renderMany(itens.imagens),
    };
  },
  renderMany(itens: Item[]) {
    return itens.map(item => this.render(item));
  }
};