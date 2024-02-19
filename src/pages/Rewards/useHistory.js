import { useQuery } from '@tanstack/react-query';
import { getClaimedHistory } from 'services/profileRequest';

export const useHistory = () => {
  const { status, data: claimedHistory } = useQuery({
    queryKey: ['claimed-history'],
    queryFn: getClaimedHistory,
  });

  return { status, claimedHistory };
};
