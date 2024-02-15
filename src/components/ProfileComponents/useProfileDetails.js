import { useQuery } from '@tanstack/react-query';
import { getProfileData } from 'services/profileRequest';

export const useProfileDetails = () => {
  const { status, data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileData,
  });

  return { status, data };
};
