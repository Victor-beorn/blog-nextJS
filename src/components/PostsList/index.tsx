import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8 ',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      )}
    >
      {posts.map(post => {
        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: `/post/${post.slug}`,
              }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
                priority: true,
              }}
            />
            <div className={clsx('flex flex-col gap-4', 'sm:justify-center')}>
              <time
                className='text-slate-600 block text-sm'
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading url='/post/${post.slug}'>{post.title}</PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
