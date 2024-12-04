import { cn } from "@/helpers/utils";
import { PropsWithChildren } from "react";
import { BottomNav } from "./bottom-tab-navigation";

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
      <BottomNav></BottomNav>
    </>
  );
}
