import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ArticleDto } from './article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  create(@Body() data: ArticleDto, @Request() res) {
    return this.articleService.create(data, res.user.sub);
  }
  @Delete('delete/:id')
  @HttpCode(204)
  @UseGuards(AuthGuard)
  delete(@Param('id') id: string, @Request() res) {
    return this.articleService.delete(id, res.user.sub);
  }

  @Post('update/:id')
  @UseGuards(AuthGuard)
  update(@Body() data: ArticleDto, @Param('id') id: string, @Request() res) {
    return this.articleService.update(data, id, res.user.sub);
  }

  @Get('read/all')
  all(@Query('take') take, @Query('skip') skip, @Query('search') search) {
    if (search) {
      return this.articleService.findSearch(search);
    }
    const Take = take ? Number(take) : undefined;
    const Skip = skip ? Number(skip) : 0;
    return this.articleService.findAll(Skip, Take);
  }

  @Get('read/:id')
  findById(@Param('id') id: string) {
    return this.articleService.findArticleById(id);
  }
}
