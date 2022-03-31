import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import Post from './entities/post.entity';
import postsJson from '../../common/data/posts.json';
import { PostsRepository } from './posts.repository';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsRepository, PostsService],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  describe('root', () => {
    it('should return all posts', async () => {
      const expectedPosts = postsJson as Post[];

      const result = await controller.getAll();

      expect(result).toBe(expectedPosts);
    });
  });

  describe('get by id', () => {
    it('should return a post', async () => {
      const id = '3';
      const expectedPost = (postsJson as Post[])[2];

      const result = await controller.get(id);

      expect(result).toBe(expectedPost);
    });
  });
});
