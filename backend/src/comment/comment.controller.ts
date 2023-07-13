import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import CommentDto from './comment.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create/:id')
  create(@Body() body: CommentDto, @Param('id') id: string) {
    return this.commentService.create(id, body);
  }

  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.commentService.delete(id);
  }
}
