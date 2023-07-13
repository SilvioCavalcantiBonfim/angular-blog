import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ProfileModule,
    ArticleModule,
    CommentModule,
    SettingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
