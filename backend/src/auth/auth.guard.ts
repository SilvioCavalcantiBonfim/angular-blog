import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtSettings } from './auth.settings';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = this.extractToken(request);
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtSettings.secret,
      });
      await this.prismaService.user.findUniqueOrThrow({
        where: {
          id: payload.sub,
        },
      });
      request['user'] = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  extractToken(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
