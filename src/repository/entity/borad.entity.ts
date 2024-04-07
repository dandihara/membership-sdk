import { Column, CreateDateColumn, DeleteDateColumn, Entity, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('board')
export class Board {
    @Column('varchar')
    title: string;

    @CreateDateColumn()
    createdAt: Timestamp;

    @UpdateDateColumn()
    updatedAt: Timestamp;
    
    @DeleteDateColumn()
    deleteAt: Timestamp;

}