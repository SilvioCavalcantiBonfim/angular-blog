import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SettingDto } from './setting.dto';

@Injectable()
export class SettingService {
  constructor(private prismaService: PrismaService) {}
  async setSettings(setting: SettingDto) {
    const idTheme = await this.prismaService.theme.findMany({
      where: {
        color1: setting.theme[0],
        color2: setting.theme[1],
      },
      select: {
        id: true,
      },
    });
    if (idTheme.length > 0) {
      await this.prismaService.setting.update({
        where: { id: 0 },
        data: { theme_id: idTheme[0].id },
      });
    }
    const up = await this.prismaService.setting.update({
      where: {
        id: 0,
      },
      data: {
        title: setting.title,
        subtitle: setting.subtitle,
        carousel_amount: setting.carousel.amount,
        carousel_time: setting.carousel.time,
        articles_per_page: setting.articles.per_page,
      },
    });
    return this.getSettings();
  }
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
  async getAllTheme() {
    return await this.prismaService.theme.findMany();
  }
}
