import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Photo } from 'photo.entity';
import { PhotoService } from 'photo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly photoService: PhotoService,
  ) {}

  @Get()
  async getHello(): Promise<Photo> {
    const photo = new Photo();
    photo.id = 1;
    photo.name = 'photo1';
    photo.description = 'photo1 description';
    photo.filename = 'photo1.jpg';
    photo.views = 0;
    return await this.photoService.save(photo);
  }
}
