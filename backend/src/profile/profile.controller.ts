import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { AuthGuard } from 'src/auth/auth.guard';
import ProfileEditDto from './profile.dto';

@UseGuards(AuthGuard)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Get()
  teste(@Request() req) {
    return this.profileService.findById(req.user.sub);
  }
  @Post()
  edit(@Body() data: ProfileEditDto, @Request() req) {
    return this.profileService.update(req.user.sub, data);
  }
}
