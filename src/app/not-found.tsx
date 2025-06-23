import clsx from 'clsx';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex flex-col items-center justify-center',
          'text-center',
        )}
      >
        <h1 className={clsx('text-8xl', 'font-extrabold', 'py-5')}>404</h1>
        <p className={clsx('text-2xl', 'font-bold', 'mb-5', 'sm:text-2lg')}>
          Página não encontrada, talves você tenha se perdido
        </p>
        <Image
          className='rounded-xl'
          src='/images/oNR.gif'
          width={500}
          height={309}
          alt='Macaco'
        />
      </div>
    </div>
  );
}
