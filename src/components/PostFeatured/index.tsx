import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'blabla';
  const postLink = `/post/${slug}`;
  return (
    <section
      className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: '/images/bryen_0.png',
          alt: 'img principal',
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt={'2025-04-08T00:24:38.616Z'}
        excerpt={
          'O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        }
        title={'Rotina matinal de pessoas altamente eficazes'}
      />
    </section>
  );
}
