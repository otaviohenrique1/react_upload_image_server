import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Item from "./Item";

@Entity('imagem')
export class Imagem extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  path!: string;

  @ManyToOne(() => Item, item => item.imagens)
  // @JoinColumn({ name: 'item_id' })
  item!: Item;
}