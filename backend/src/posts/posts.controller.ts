import { Controller, Get, Param } from '@nestjs/common';
import Post from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private service: PostsService) {}

  @Get()
  public async getAll(): Promise<Post[]> {
    return await this.service.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<Post> {
    return await this.service.get(id);
  }
}
