import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [PrismaModule],
})
export class SettingsModule {}
