import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Imagem } from "./Imagem";

@Entity('item')
export default class Item {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @OneToMany(() => Imagem, imagem => imagem.item, {
    cascade: ['insert', 'update']
  })
  // @JoinColumn({ name: 'item_id' })
  imagens!: Imagem[];
}
