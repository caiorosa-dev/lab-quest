import { Link } from "@tanstack/react-router";
import { House, BookOpen, Medal, User } from "lucide-react";

const tabs = [
  {
    name: "Home",
    icon: House,
    path: "/",
  },
  {
    name: "Trilhas",
    icon: BookOpen,
    path: "/tracks",
  },
  {
    name: "Ranking",
    icon: Medal,
    path: "/rankings",
  },
  {
    name: "Perfil",
    icon: User,
    path: "/profile",
  },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white">
      <div className="flex justify-around py-3">
        {tabs.map((tab, index) => (
          <Link key={index} to={tab.path}>
            <button
              key={index}
              title={tab.name}
              className="flex flex-col items-center text-gray-600 hover:text-primary focus:outline-none focus:text-primary"
            >
              <div className="bg-neutral-200 hover:bg-neutral-300 p-2 rounded-lg transition-all">
                <tab.icon className="w-6 h-6" />
              </div>
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { BottomNav };
