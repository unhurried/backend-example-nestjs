import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { Category } from '../resource/todo';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  _id?: string;

  @PrimaryColumn()
  id?: string;

  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  category: Category;

  @Column('text')
  content?: string;
}
