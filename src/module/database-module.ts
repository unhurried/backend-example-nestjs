import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { TodoEntity } from '../entity/todo.entity';

@Module({})
export class DatabaseModule {
  static async forRoot(entities = [], options?): Promise<DynamicModule> {
    // Create in-memory mongodb server when DB_URL is not specified.
    const url = process.env.DB_URL? process.env.DB_URL : (await MongoMemoryServer.create()).getUri();

    return TypeOrmModule.forRoot({
      type: 'mongodb',
      url,
      entities: [TodoEntity],
      keepConnectionAlive: true,
    })
  }
}