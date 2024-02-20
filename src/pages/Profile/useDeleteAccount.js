import { useMutation } from '@tanstack/react-query';
import { deleteUserAccount } from 'services/profileRequest';

export const useDeleteAccount = () => {
  const { status: deletingStatus, mutate: deleteAccount } = useMutation({
    mutationFn: deleteUserAccount,

    onSuccess: (response) => {
      console.log(response);
    },

    onError: (err) => {
      console.log(err);
    },
  });

  return { deletingStatus, deleteAccount };
};
