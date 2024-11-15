import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/shared/decorators/public-route.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve greeting message' })
  @ApiResponse({
    status: 200,
    description: 'Returns the greeting message from the service.',
  })
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }
}
