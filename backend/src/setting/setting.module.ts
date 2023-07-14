import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SettingController],
  providers: [SettingService],
  imports: [PrismaModule],
})
export class SettingModule {}
