import { Test, TestingModule } from '@nestjs/testing';
import Post from './entities/post.entity';
import { PostsRepository } from './posts.repository';
import postsJson from '../../common/data/posts.json';

describe('PostsRepository', () => {
  let provider: PostsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsRepository],
    }).compile();

    provider = module.get<PostsRepository>(PostsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should return all posts', () => {
    const expectedPosts = postsJson as Post[];

    const result = provider.getAll();

    expect(result).toBe(expectedPosts);
  });

  it('should return a single post', () => {
    const id = 1;
    const expectedPost = (postsJson as Post[])[0];

    const result = provider.get(id);

    expect(result).toBe(expectedPost);
  });
});
