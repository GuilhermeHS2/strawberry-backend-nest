/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { ProdutoEntity } from "./produto.entity";

@Entity('produto_imagens')
export class ProdutoImagemEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({name:'url',length:100, nullable:false})
    url: string;

    @Column({name:'descricao', length:255, nullable: false})
    descricao: string;

    @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristicas, {orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    produto: ProdutoEntity;
}