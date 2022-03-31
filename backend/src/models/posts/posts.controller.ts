import { Controller, Get, Param } from '@nestjs/common';
import Post from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private service: PostsService) {}

  @Get()
  public getAll(): Post[] {
    return this.service.getAll();
  }

  @Get(':id')
  public get(@Param('id') id: string): Post {
    return this.service.get(id);
  }
}
