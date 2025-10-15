import { revalidateExampleAction } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/form-date';
// import { revalidatePath, revalidateTag } from 'next/cache';

// revalidatePath('/exemple/1');
// revalidateTag('exemple-1');

export const dynamic = 'force-static';

// export const dynamicParams = true;
// export const revalidate = 10;

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }];
// }

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

      <form className='py-16' action={revalidateExampleAction}>
        <input type='hidden' name='path' defaultValue={`/exemple/${id}`} />

        <button
          className='text-white bg-amber-400 p-2 rounded cursor-pointer hover:bg-amber-600 transition'
          type='submit'
        >
          Revalidate
        </button>
      </form>
    </main>
  );
}
