import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ViewService {
  constructor(private prismaService: PrismaService) {}
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
  async findSearch(search: string) {
    return await this.prismaService.article.findMany({
      orderBy: {
        created_at: 'desc',
      },
      where: {
        title: {
          contains: search
        }
      },
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
        }
      },
    });
  }

  async findAll(skip: number, take?: number) {
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
        }
      },
    });
  }
}
