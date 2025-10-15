import { formatHour } from '@/utils/form-date';

export const dynamic = 'force-dynamic';

export default async function ExempleDynamicPaga() {
  const hour = formatHour(Date.now());

  return (
    <main className='main-h-[600px] text-4xl font-bold'>
      <div>Hora: {hour}</div>
    </main>
  );
}
