import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ViewController } from './view/view.controller';
import { ViewService } from './view/view.service';

@Module({
  controllers: [ArticleController, ViewController],
  providers: [ArticleService, ViewService],
  imports: [PrismaModule],
})
export class ArticleModule {}
