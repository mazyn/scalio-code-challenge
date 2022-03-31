import { Test, TestingModule } from '@nestjs/testing';
import Post from './entities/post.entity';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all posts', () => {
    const mockPosts: Post[] = [
      {
        userId: 1,
        id: 1,
        title: 'foo',
        body: "foo's body",
      },
      {
        userId: 1,
        id: 2,
        title: 'bar',
        body: "bar's body",
      },
    ];

    jest.spyOn(service, 'getAll').mockImplementation(() => mockPosts);

    expect(service.getAll()).toBe(mockPosts);
  });

  it('should return a post', () => {
    const id = 1;
    const result: Post = {
      userId: 1,
      id: 1,
      title: 'foo',
      body: 'bar',
    };

    jest.spyOn(service, 'get').mockImplementation(() => result);

    expect(service.get(id)).toBe(result);
  });
});
