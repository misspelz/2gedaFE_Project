import { useQuery } from '@tanstack/react-query';
import { getUserStickers } from 'services/profileRequest';

export const useGetStickers = () => {
  const { status: stickerStatus, data: stickers } = useQuery({
    queryKey: ['stickers'],
    queryFn: getUserStickers,
  });

  return { stickerStatus, stickers };
};
