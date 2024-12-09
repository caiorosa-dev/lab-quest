import { cn } from "@/helpers/utils";
import { PropsWithChildren } from "react";
import { MobileNav } from './layout/mobile-nav';

export function FullScreenPage({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <>
      <main
        className={cn(
          "w-full min-h-screen h-full flex justify-center",
          className
        )}
      >
        {children}
      </main>
      <MobileNav />
    </>
  );
}
