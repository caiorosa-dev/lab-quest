import { cn } from "@/helpers/utils";
import { Link } from "@tanstack/react-router";
import { House, BookOpen, Medal, User } from "lucide-react";
import { SVGProps } from "react";

const tabs = [
  {
    name: "Home",
    icon: House,
    path: "/app",
    exact: true,
  },
  {
    name: "Trilhas",
    icon: BookOpen,
    path: "/app/tracks",
  },
  {
    name: "Ranking",
    icon: Medal,
    path: "/app/ranking",
  },
  {
    name: "Perfil",
    icon: User,
    path: "/app/profile",
  },
];

function NavItem({
  name,
  icon: Icon,
  path,
  exact,
}: {
  name: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  path: string;
  exact?: boolean;
}) {
  const isActive = exact
    ? window.location.pathname === path
    : window.location.pathname.startsWith(path);

  return (
    <Link to={path}>
      <button
        title={name}
        className={cn(
          "flex items-center justify-center outline-none h-12 w-12 rounded-lg transition-all",
          isActive && "text-primary-foreground bg-primary hover:opacity-80",
          !isActive &&
            "text-muted-foreground focus:text-primary-foreground bg-accent hover:bg-primary hover:text-primary-foreground"
        )}
      >
        <Icon className="w-6 h-6" />
      </button>
    </Link>
  );
}

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-background">
      <div className="flex justify-around py-3 max-w-xl w-full mx-auto">
        {tabs.map((tab, index) => (
          <NavItem
            key={index}
            name={tab.name}
            icon={tab.icon}
            path={tab.path}
            exact={tab.exact}
          />
        ))}
      </div>
    </nav>
  );
};

export { MobileNav };
