import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  LogIn(@Body() SeginDto: Record<string, any>) {
    return this.authService.LogIn(SeginDto.user_access, SeginDto.password);
  }
}
