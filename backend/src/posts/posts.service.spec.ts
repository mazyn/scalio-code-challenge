import { Test, TestingModule } from '@nestjs/testing';
import Post from './entities/post.entity';
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';
import postsJson from '../common/data/posts.json';
import { BadRequestException } from '@nestjs/common';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsRepository, PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all posts', async () => {
    const expectedPosts = postsJson as Post[];

    const result = await service.getAll();

    expect(result).toBe(expectedPosts);
  });

  describe('get method', () => {
    it('should return a post', async () => {
      const id = '1';
      const expectedPost = (postsJson as Post[])[0];

      const result = await service.get(id);

      expect(result).toBe(expectedPost);
    });

    it('should throw bad request when ID is a string representation of a decimal', async () => {
      const id = '2.7';

      await expect(service.get(id)).rejects.toThrowError(BadRequestException);
    });

    it('should throw bad request when ID is a string representation of a number below zero', async () => {
      const id = '-5';

      await expect(service.get(id)).rejects.toThrowError(BadRequestException);
    });

    it("should throw bad request when ID is a string that doesn't represent a number", async () => {
      const id = 'abc';

      await expect(service.get(id)).rejects.toThrowError(BadRequestException);
    });
  });
});
