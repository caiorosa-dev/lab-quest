import { getInitials } from '@/helpers/get-initials';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@radix-ui/react-popover';
import { HomeIcon, GitFork, GitBranch, Blocks, LogOutIcon } from 'lucide-react';
import { Logo } from './logo';
import { SidebarNavLink } from './ui/sidebar-nav';
import { SidebarNav } from './ui/sidebar-nav';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button, ButtonIcon } from './ui/button';
import { useAuth } from '@/store/use-auth';
import { useMe } from '@/hooks/api/use-me';
import { Skeleton } from './ui/skeleton';

export function Sidebar() {
  const { logout } = useAuth();
  const { user, isLoadingUser } = useMe();

  return (
    <aside className="max-w-64 w-full border-r border-border h-screen py-6 px-4 flex flex-col justify-between max-md:hidden">
      <header className="flex flex-col gap-12 animate-fade-up">
        <Logo className="mx-auto" />
        <SidebarNav className="animate-fade-up animate-delay-200">
          <SidebarNavLink url="/" icon={HomeIcon} exact>
            Início
          </SidebarNavLink>
          <SidebarNavLink url="/trilhas" icon={GitFork}>
            Trilhas
          </SidebarNavLink>
          <SidebarNavLink url="/capitulos" icon={GitBranch}>
            Capítulos
          </SidebarNavLink>
          <SidebarNavLink url="/exercicios" icon={Blocks}>
            Lições
          </SidebarNavLink>
        </SidebarNav>
      </header>
      <Popover>
        <PopoverTrigger asChild>
          <footer className="flex items-center justify-start gap-2 p-2 hover:bg-secondary rounded-md transition-all hover:cursor-pointer">
            {!isLoadingUser && (
              <>
                <Avatar className="animate-fade-up animate-delay-300">
                  <AvatarImage src="https://via.placeholder.com/150" />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 animate-fade-up animate-delay-300">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </>
            )}
            {isLoadingUser && <Skeleton className="h-12 w-full animate-fade-up animate-delay-300" />}
          </footer>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-3">
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onClick={logout}
          >
            <ButtonIcon side="left" icon={LogOutIcon} />
            Sair
          </Button>
        </PopoverContent>
      </Popover>
    </aside>
  );
}
