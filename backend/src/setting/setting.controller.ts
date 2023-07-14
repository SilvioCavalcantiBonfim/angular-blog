import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SettingDto } from './setting.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get()
  settings() {
    return this.settingService.getSettings();
  }

  @UseGuards(AuthGuard)
  @Post()
  setSetting(@Body() setting: SettingDto) {
    return this.settingService.setSettings(setting);
  }

  @Get('theme/all')
  themeAll() {
    return this.settingService.getAllTheme();
  }
}
