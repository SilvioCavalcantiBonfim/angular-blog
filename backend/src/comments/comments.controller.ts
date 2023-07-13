import { Body, Controller, Delete, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import CommentDto from './comment.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('comment')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @Post(':id')
  create(@Body() body: CommentDto, @Param('id') id: string) {
    return this.commentsService.create(id, body);
  }
  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.commentsService.delete(id);
  }
}
