import { cn } from '@/helpers/utils';
import { useIsActive } from '@/hooks/use-is-active';
import { Link, LinkProps } from '@tanstack/react-router';
import { ReactNode } from 'react';

interface SidebarNavProps {
	children: ReactNode;
	className?: string;
}

export function SidebarNav({ children, className }: SidebarNavProps) {
	return (
		<nav className={cn('flex flex-col gap-3 w-full', className)}>
			{children}
		</nav>
	);
}

interface SidebarNavLinkProps extends LinkProps {
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	url: string;
	exact?: boolean;
	icon?: React.FC<{ className?: string }>;
}

export function SidebarNavLink({
	children,
	className,
	activeClassName,
	url,
	exact = true,
	icon: Icon,
	...props
}: SidebarNavLinkProps) {
	const isActive = useIsActive(url, exact);

	return (
		<Link
			{...props}
			className={cn(
				'font-medium text-sm flex gap-3 justify-start items-center w-full py-2 px-4 rounded-md transition-all hover:bg-accent',
				isActive && 'text-primary bg-secondary',
				isActive && activeClassName,
				!isActive && 'bg-transparent hover:text-accent-foreground text-secondary-foreground',
				className
			)}
		>
			{Icon && <Icon className='w-4 h-4' />}
			{children}
		</Link>
	);
}
