import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useApi } from './use-api';

type UseApiRouteOptions = {
  refresh?: number | false;
};

export function useApiRoute<T>(
  endpoint: string[],
  { refresh = 10000 }: UseApiRouteOptions = {}
): UseQueryResult<T, Error> {
  const api = useApi();

  return useQuery({
    refetchInterval: refresh,
    queryKey: [...endpoint],
    queryFn: async () => {
      const response = await api.get(`${endpoint.join('/')}`);

      return response.data;
    },
  });
}
