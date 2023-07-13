import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prismaService: PrismaService) {}
  async getSettings() {
    return await this.prismaService.setting.findFirst({
      select: {
        id: false,
        title: true,
        subtitle: true,
        carousel_amount: true,
        carousel_time: true,
        theme_id: false,
        Theme: {
          select: {
            color1: true,
            color2: true,
          },
        },
      },
    });
  }
}
