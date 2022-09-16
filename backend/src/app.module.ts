import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ItemModule,
    TransactionModule,
    MongooseModule.forRoot(environment.MONGO_DB),
    ConfigModule.forRoot({
      load: [() => ({ environment })],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
