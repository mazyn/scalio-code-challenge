import { Injectable } from '@nestjs/common';
import Post from './entities/post.entity';
import postsJson from '../common/data/posts.json';

@Injectable()
export class PostsRepository {
  private posts = postsJson as Post[];

  getAll(): Post[] {
    return this.posts;
  }

  get(id: number): Post {
    return this.posts?.find((p) => p.id === id);
  }
}
