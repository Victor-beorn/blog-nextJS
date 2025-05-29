import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16', 'sm:grid-cols-2 group')}
      >
        <PostCoverImage
          linkProps={{
            href: '#',
          }}
          imageProps={{
            src: '/images/bryen_0.png',
            alt: 'img principal',
            width: 1200,
            height: 720,
            priority: true,
          }}
        />

        <div className={clsx('flex flex-col gap-4', 'sm:justify-center')}>
          <time className='text-slate-600 block text-sm' dateTime='2025-04-20'>
            20/04/2025 10:00
          </time>
          <PostHeading as='h1' url='#'>
            Mesacast se torna o time de midia mais consumida
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae
            esse voluptatum. Minus eius aut quasi nesciunt, labore rem explicabo
            non debitis ratione voluptatum nobis commodi sit amet repellendus
            eligendi.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>footer</p>
      </footer>
    </Container>
  );
}
