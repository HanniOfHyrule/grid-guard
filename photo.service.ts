import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}
  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
  async save(photo: Photo): Promise<Photo> {
    return this.photoRepository.save(photo);
  }
}
