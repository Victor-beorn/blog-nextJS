import { formatHour } from '@/utils/form-date';

// export const dynamic = 'force-dynamic';
export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export default async function ExempleDynamicPaga({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  return (
    <main className='main-h-[600px] text-4xl font-bold'>
      <div>
        Hora: {hour}
        (ID: {id})
      </div>
    </main>
  );
}
