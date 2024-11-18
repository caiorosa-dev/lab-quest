import { useMe } from '@/hooks/api/use-me';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button, ButtonIcon } from '../ui/button';
import { ArrowLeftIcon, LogOutIcon } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useAuth } from '@/store/use-auth';

export function Header({
  children,
  hideBackButton,
  backUrl,
}: {
  children?: React.ReactNode;
  hideBackButton?: boolean;
  backUrl?: string;
}) {
  const { logout } = useAuth();
  const { user, isLoading } = useMe();
  const navigate = useNavigate();

  return (
    <header className="space-y-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {!hideBackButton && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => navigate({ to: backUrl ?? '/' })}
            >
              <ArrowLeftIcon className="size-4" />
            </Button>
          )}
          {children}
        </div>
        
      </section>
    </header>
  );
}
