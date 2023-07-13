import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtSettings } from './auth.settings';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [PrismaModule, JwtModule.register({ ...jwtSettings })],
})
export class AuthModule {}
