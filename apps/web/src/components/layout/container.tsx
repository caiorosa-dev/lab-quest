import { cn } from '@/helpers/utils';

export function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("max-w-xl mx-auto w-full h-full p-4 animate-fade-up animate-duration-500 grid grid-cols-1 items-center pt-12 pb-20 px-4", className)}>{children}</div>
  );
}
