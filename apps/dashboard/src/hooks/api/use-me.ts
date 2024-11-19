import { User } from '@/types/User';
import { useApiRoute } from '../lib/use-api-route';

type UseMeHookReturn = {
  user: User;
  isLoadingUser: boolean;
  isFetching: boolean;
  error: Error | null;
};

export function useMe(): UseMeHookReturn {
  const { data, isLoading, isFetching, error } = useApiRoute<User>([
    'users',
    'me',
  ]);

  return {
    user: data ?? ({} as User),
    isLoadingUser: isLoading,
    isFetching,
    error,
  };
}
