import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';

@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'darkipro1012',
      database: 'CursoUdemy',
      entities: [Todo],
      synchronize: true, //DO NOT USE THIS IN PRODUCTION
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
