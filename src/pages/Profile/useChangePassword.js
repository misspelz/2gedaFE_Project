import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { changePassword } from 'services/profileRequest';

export const useChangePassword = () => {
  const navigate = useNavigate();

  const { status: changingStatus, mutate: updatingPassword } = useMutation({
    mutationFn: changePassword,

    onSuccess: (data) => {
      if (data?.detail === 'Invalid token.') {
        return navigate('/Signin');
      }
    },
  });

  return { changingStatus, updatingPassword };
};
