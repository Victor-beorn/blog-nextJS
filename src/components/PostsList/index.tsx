import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostSummary } from '../PostSummary';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublicPostsCached();
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8 ',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
        'mb-16',
      )}
    >
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                src: post.coverImageUrl,
                alt: post.title,
                width: 1200,
                height: 720,
                priority: true,
              }}
            />
            <PostSummary
              postHeading='h2'
              postLink={postLink}
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
