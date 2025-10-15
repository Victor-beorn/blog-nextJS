import { DrizzlePostRespository } from './drizzle-posts-repository';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new DrizzlePostRespository();
