import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Post from './entities/post.entity';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private repo: PostsRepository) {}

  async getAll(): Promise<Post[]> {
    return this.repo.getAll();
  }

  async get(id: string): Promise<Post> {
    const idNumber = Number(id);

    if (!Number.isInteger(idNumber) || idNumber <= 0)
      throw new BadRequestException(
        'Invalid ID provided, please provide an ID greater than 0 and with no decimals',
      );

    const post = this.repo.get(idNumber);

    if (!post) throw new NotFoundException('Post not found');

    return post;
  }
}
