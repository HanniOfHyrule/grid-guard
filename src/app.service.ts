import { Injectable } from '@nestjs/common';
import { Photo } from 'photo.entity';

@Injectable()
export class AppService {
  getHello(): Photo {
    const photo = new Photo();
    photo.id = 1;
    photo.name = 'photo1';
    photo.description = 'photo1 description';
    photo.filename = 'photo1.jpg';
    photo.views = 0;
    photo.isPublished = true;
    return photo;
  }
}
