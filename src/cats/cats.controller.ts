import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Logger } from 'traceability';
@Controller('cats')
export class CatsController {
  //   private logger = new Logger(CatsController.name);
  constructor(private readonly catService: CatsService) {}

  @Get()
  getCat(): string {
    // this.logger.log("Cat")
    const cat={
        'skin':'red',
        'age':10
    }
    Logger.info(`Cat controller Request`)
    return this.catService.getCat();
  }
}
