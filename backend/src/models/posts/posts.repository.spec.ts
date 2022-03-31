import { Test, TestingModule } from '@nestjs/testing';
import Post from './entities/post.entity';
import { PostsRepository } from './posts.repository';

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
    const mockReturn: Post[] = [
      {
        userId: 1,
        id: 1,
        title: 'foo',
        body: 'bar',
      },
    ];

    jest.spyOn(provider, 'getAll').mockImplementationOnce(() => mockReturn);

    const result = provider.getAll();

    expect(result).toBe(mockReturn);
    expect(result.length).toBe(1);
  });

  it('should return a single post', () => {
    const id = 1;
    const mockReturn: Post = {
      userId: 1,
      id: 1,
      title: 'foo',
      body: 'bar',
    };

    jest.spyOn(provider, 'get').mockImplementationOnce(() => mockReturn);

    const result = provider.get(id);

    expect(result).toBe(mockReturn);
  });
});
