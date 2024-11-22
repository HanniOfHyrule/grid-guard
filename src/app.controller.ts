import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Photo } from 'photo.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Photo {
    return this.appService.getHello();
  }
}
