import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

const SIMULATE_WAIT_IN_MS = 0;

export class DrizzlePostRespository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 5000) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');

    await this.simulateWait();

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado para Slug');

    return post;
  }
  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para ID');

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRespository();
//   const posts = await repo.findAllPublic();

//   posts.forEach(post => console.log(post.slug, post.published));
// })();
