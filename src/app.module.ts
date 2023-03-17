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
    host: 'mysql-116242-0.cloudclusters.net',
    port: 16182,
    username: 'admin',
    password: "mOKBCD91",
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
