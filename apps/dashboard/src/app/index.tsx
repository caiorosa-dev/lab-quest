import { createFileRoute } from '@tanstack/react-router';
import { useProtectedRoute } from '@/hooks/auth/use-protected-route';
import { useMe } from '@/hooks/api/use-me';
import { FullScreenPage } from '@/components/full-screen-page';
import { Header } from '@/components/blocks/header';
import { Loading } from '@/components/loading';
import { Logo } from '@/components/logo';
import { Blocks, GitBranch, GitFork, HomeIcon, LogOutIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/helpers/get-initials';
import { SidebarNav, SidebarNavLink } from '@/components/ui/sidebar-nav';
import { ButtonIcon } from '@/components/ui/button';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/store/use-auth';

export const Route = createFileRoute('/')({
  component: IndexPage,
});

function IndexPage() {
  const { user, isLoading } = useMe();
  const { logout } = useAuth();

  useProtectedRoute();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FullScreenPage className='flex'>
      <aside className='max-w-64 w-full border-r border-border h-screen py-6 px-4 flex flex-col justify-between'>
        <header className='flex flex-col gap-12'>
          <Logo className='mx-auto' />
          <SidebarNav>
            <SidebarNavLink url='/' icon={HomeIcon} exact>
              Início
            </SidebarNavLink>
            <SidebarNavLink url='/trilhas' icon={GitFork}>
              Trilhas
            </SidebarNavLink>
            <SidebarNavLink url='/capitulos' icon={GitBranch}>
              Capítulos
            </SidebarNavLink>
            <SidebarNavLink url='/exercicios' icon={Blocks}>
              Lições
            </SidebarNavLink>
          </SidebarNav>
        </header>
        <Popover>
          <PopoverTrigger asChild>
            <footer className='flex items-center justify-start gap-2 p-2 hover:bg-secondary rounded-md transition-all hover:cursor-pointer'>
              <Avatar>
                <AvatarImage src='https://via.placeholder.com/150' />
                <AvatarFallback>
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium'>{user.name}</p>
                <p className='text-xs text-muted-foreground'>{user.email}</p>
              </div>
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
      <div className="max-w-7xl w-full mx-auto pt-8 space-y-8">
        <Header hideBackButton>
          <div>
            <p className="text-muted-foreground text-sm">Bem vindo,</p>
            <h1>{user.name}</h1>
          </div>
        </Header>
      </div>
    </FullScreenPage>
  );
}