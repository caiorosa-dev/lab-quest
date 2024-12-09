import { cn } from "@/helpers/utils";
import { Link } from "@tanstack/react-router";
import { CircleFadingArrowUp, Flame } from "lucide-react";
import { SVGProps } from "react";
import { Logo } from "../misc/logo";
import { Progress } from "../ui/progress";

const MobileHeader = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-background">
        <div className="flex justify-between py-3 max-w-xl w-full mx-auto">
          <Logo />
          <div className="flex gap-2 items-center">
            <Flame color="#F59E0B"></Flame>
            <CircleFadingArrowUp color="#1E293B" />
            <Progress value={33} className="w-24" />
            <span className="text-primary font-semibold">14xp</span>
          </div>
        </div>
      </header>
    </>
  );
};

export { MobileHeader };
