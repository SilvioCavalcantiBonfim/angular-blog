import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
  constructor(private prismaService: PrismaService) {}

  async getAllNotContent(id: string) {
    return await this.prismaService.article.findMany({
      where: {
        author_id: id,
      },
      select: {
        content: false,
        id: true,
        title: true,
        updated_at: true,
        thumb: true,
      },
    });
  }
  // metodos autenticados

  async manipulateArticle(id_article: string, id: string) {
    let article = null;
    try {
      article = await this.prismaService.article.findUniqueOrThrow({
        where: {
          id: id_article,
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
    if (article.author_id !== id) {
      throw new UnauthorizedException();
    }
    return article;
  }

  async update(article: ArticleDto, article_id: string, author_id: string) {
    const CurrentArticle = await this.manipulateArticle(article_id, author_id);
    return await this.prismaService.article.update({
      where: {
        id: article_id,
      },
      data: {
        title: article.title || CurrentArticle.title,
        content: article.content || CurrentArticle.content,
        thumb: article.thumb || CurrentArticle.thumb,
      },
    });
  }

  async delete(id_article: string, id: string) {
    await this.manipulateArticle(id_article, id);
    const current_article = await this.prismaService.article.findUnique({
      where: { id: id_article },
      select: { comments: true, id: true },
    });

    current_article.comments.forEach(async (e) => {
      await this.prismaService.comment.delete({ where: { id: e.id } });
    });
    await this.prismaService.article.delete({
      where: { id: current_article.id },
    });
  }

  async create(article: ArticleDto, author_id: string) {
    return await this.prismaService.article.create({
      data: {
        title: article.title,
        content: article.content,
        author_id,
        thumb: article.thumb,
      },
    });
  }

  async findArticleById(id: string) {
    try {
      return await this.prismaService.article.findUniqueOrThrow({
        where: {
          id: id,
        },
        select: {
          title: true,
          content: true,
          created_at: true,
          updated_at: true,
          thumb: true,
          comments: {
            select: {
              id: true,
              article_id: true,
              content: true,
              author: true,
              created_at: true,
            },
          },
          Author: {
            select: {
              id: false,
              password: false,
              email: false,
              full_name: true,
            },
          },
        },
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async findAll({
    skip,
    take,
    search,
  }: {
    skip: number;
    take?: number;
    search: string;
  }) {
    const totalRegister = await this.prismaService.article.count();
    let CurrentTake: number | undefined;
    if (take && totalRegister < take + skip) {
      CurrentTake = undefined;
    } else {
      CurrentTake = take;
    }
    return await this.prismaService.article.findMany({
      orderBy: {
        created_at: 'desc',
      },
      where: {
        title: {
          contains: search,
        },
      },
      skip: skip,
      take: CurrentTake,
      select: {
        content: false,
        id: true,
        title: true,
        created_at: true,
        updated_at: true,
        comments: true,
        thumb: true,
        Author: {
          select: {
            id: false,
            password: false,
            email: true,
            full_name: true,
          },
        },
      },
    });
  }
}
