import { formatDistanceToNow, formDate } from '@/utils/form-date';

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className='text-slate-600 text-sm'
      dateTime={dateTime}
      title={formatDistanceToNow(dateTime)}
    >
      {formDate(dateTime)}
    </time>
  );
}
