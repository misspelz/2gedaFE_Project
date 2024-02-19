import { useQuery } from '@tanstack/react-query';
import { getRewards } from 'services/profileRequest';

export const useRewards = () => {
  const { status, data: rewards } = useQuery({
    queryKey: ['rewards'],
    queryFn: getRewards,
  });

  return { status, rewards };
};
