import { Injectable } from '@nestjs/common';
import { Logger } from 'traceability';
@Injectable()
export class CatsService {
  getCat(): string {
    Logger.info('Cat service');
    return 'Hellow cat';
  }
}
