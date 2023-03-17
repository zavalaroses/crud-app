import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Contact } from './contacts/contact.entity';

@Module({
  imports: [ContactsModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    username: 'root',
    password: null,
    database:'db',
    entities: [Contact],
    synchronize:true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
//__dirname + '/**/*.entity{.ts,.js}'
export class AppModule {}
