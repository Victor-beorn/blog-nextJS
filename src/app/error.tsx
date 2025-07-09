'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RoutErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RoutErrorPage({ error }: RoutErrorPageProps) {
  useEffect(() => {
    // console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Error em nossa aplicação. Tente voltar mais tarde'
    />
  );
}
