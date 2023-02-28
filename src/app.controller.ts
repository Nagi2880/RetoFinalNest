import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Este es mi primera aplicacion en Nest';
  }
}
//npm run start:dev en la consola para ejecutarlo
