import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ArticleDto } from './article.dto';

@UseGuards(AuthGuard)
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post('new')
  create(@Body() data: ArticleDto, @Request() res) {
    return this.articleService.create(data, res.user.sub);
  }
  @Delete('delete/:id')
  @HttpCode(204)
  delete(@Param('id') id: string, @Request() res) {
    return this.articleService.delete(id, res.user.sub);
  }

  @Post('update/:id')
  update(@Body() data: ArticleDto, @Param('id') id: string, @Request() res) {
    return this.articleService.update(data, id, res.user.sub);
  }
}
