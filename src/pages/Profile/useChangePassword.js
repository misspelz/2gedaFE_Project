import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { changePassword } from 'services/profileRequest';
import { useModal } from 'Hooks/useModal';

export const useChangePassword = () => {
  const navigate = useNavigate();
  const { setModal } = useModal();

  const { status: changingStatus, mutate: updatingPassword } = useMutation({
    mutationFn: changePassword,

    onSuccess: (data) => {
      if (data?.detail === 'Invalid token.') {
        return navigate('/Signin');
      }

      if (!data.status) {
        return toast.error(data.message);
      }

      if (data.status) {
        setModal({});

        return toast.success(data.message);
      }
    },
  });

  return { changingStatus, updatingPassword };
};
