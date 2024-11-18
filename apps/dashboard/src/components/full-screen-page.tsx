import { cn } from '@/helpers/utils';
import { PropsWithChildren } from 'react';

export function FullScreenPage({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <main className={cn('w-full min-h-screen h-full p-4', className)}>
      {children}
    </main>
  );
}
