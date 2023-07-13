import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import ProfileEditDto from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}
  async update(id: string, data: ProfileEditDto) {
    const CurrentData = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        full_name: data.full_name || CurrentData.full_name,
        email: data.email || CurrentData.email,
        password: data.password || CurrentData.password,
      },
      select: {
        full_name: true,
        email: true,
      },
    });
  }
  async findById(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        full_name: true,
        email: true,
      },
    });
  }
}
