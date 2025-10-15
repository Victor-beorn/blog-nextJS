'user server';

import { revalidatePath } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('estou em uma server action', path);

  revalidatePath(`${path}`);
}
