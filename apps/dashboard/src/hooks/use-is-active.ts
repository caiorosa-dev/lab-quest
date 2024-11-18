import { useLocation } from '@tanstack/react-router';

export function useIsActive(url: string, exact: boolean = true): boolean {
	const location = useLocation();

	if (exact) {
		return location.pathname === url;
	} else {
		return location.pathname.startsWith(url);
	}
}
