import { cn } from '@/helpers/utils';
import { PropsWithChildren } from 'react';

export function FullScreenPage({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <main className={cn('w-full min-h-screen h-full', className)}>
      {children}
    </main>
  );
}
