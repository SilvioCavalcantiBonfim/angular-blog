import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CommentDto from './comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(article_id: string, comment: CommentDto) {
    try {
      await this.prismaService.article.findUniqueOrThrow({
        where: { id: article_id },
      });
      return this.prismaService.comment.create({
        data: {
          article_id,
          content: comment.content,
          author: comment.author,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async delete(id: string) {
    return await this.prismaService.comment.delete({
      where: {
        id,
      }
    });
  }
}
