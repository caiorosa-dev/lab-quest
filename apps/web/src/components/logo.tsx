import { cn } from '@/helpers/utils';

type Props = {
	className?: string;
}

export function Logo({ className }: Props) {
	return (
		<>
			<img src='/logo-light.svg' alt='logo' className={cn('h-6 dark:hidden', className)} />
			<img src='/logo-dark.svg' alt='logo' className={cn('h-6 hidden dark:block', className)} />
		</>
	);
}