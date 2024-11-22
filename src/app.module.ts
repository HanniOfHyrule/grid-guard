import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from 'photo.module';
import { PhotoService } from 'photo.service';
import { DatabaseModule } from 'database.module';
import { photoProviders } from 'photo.providers';

@Module({
  imports: [PhotoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, PhotoService, ...photoProviders],
})
export class AppModule {}
