import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';
import { SafeMarkdown } from '../SafeMarkdown';

type SinglePagePromise = {
  slug: string;
};

export async function SinglePage({ slug }: SinglePagePromise) {
  const post = await findPostBySlugCached(slug);
  return (
    <article className='mb-16'>
      <header className='flex flex-col gap-3 mb-3 dark:text-slate-100'>
        <Image
          className='rounded-xl '
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p className='dark:text-slate-100'>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <p className='text-xl mb-3 text-slate-600 dark:text-slate-100'>
        {post.excerpt}
      </p>
      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
