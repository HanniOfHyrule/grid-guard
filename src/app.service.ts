import { Injectable } from '@nestjs/common';
import { Photo } from 'photo.entity';

@Injectable()
export class AppService {
  getHello(): Photo {
    const photo = new Photo({id: 1234});
    return photo;
  }
}
