import { cn } from '@/helpers/utils';
import { PropsWithChildren } from 'react';
import { Sidebar } from './sidebar';

export function FullScreenPage({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={cn('w-full min-h-screen h-full flex', className)}>
      <Sidebar />
      <main className="flex-1 animate-fade-up animate-delay-500">{children}</main>
    </section>
  );
}
