import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prismaService: PrismaService) {}
  async getSettings() {
    const data = await this.prismaService.setting.findUnique({
      where: {
        id: 0,
      },
      select: {
        id: false,
        title: true,
        subtitle: true,
        carousel_amount: true,
        carousel_time: true,
        theme_id: false,
        articles_per_page: true,
        Theme: {
          select: {
            color1: true,
            color2: true,
          },
        },
      },
    });
    const countArticle = await this.prismaService.article.count();
    return {
      title: data.title,
      subtitle: data.subtitle,
      theme: Object.values(data.Theme),
      carousel: {
        amount: data.carousel_amount,
        time: data.carousel_time,
      },
      articles: {
        total: countArticle,
        per_page: data.articles_per_page,
      },
    };
  }
}
