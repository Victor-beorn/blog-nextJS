import { formatDistanceToNow, formDate } from '@/utils/form-date';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className={clsx('flex flex-col gap-4', 'sm:justify-center')}>
      <time
        className='text-slate-600 block text-sm'
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formDate(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
