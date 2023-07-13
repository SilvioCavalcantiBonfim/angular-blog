import { Controller, Get, Param, Query } from '@nestjs/common';
import { ViewService } from './view.service';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}

  @Get('by/:id')
  findById(@Param('id') id: string) {
    return this.viewService.findArticleById(id);
  }
  @Get('all')
  all(@Query('take') take, @Query('skip') skip, @Query('search') search) {
    if(search){
      return this.viewService.findSearch(search);
    }
    const Take = take ? Number(take) : undefined;
    const Skip = skip ? Number(skip) : 0;
    return this.viewService.findAll(Skip, Take);
  }
}
