import clsx from 'clsx';

export function Header() {
  return (
    <h1
      className={clsx(
        'text-xl',
        'font-bold',
        'text-amber-500',
        'hover:text-blue-50',
        'hover:bg-blue-500',
        'transition',
        'duration-300',
      )}
    >
      Tecto h1 grande
    </h1>
  );
}
