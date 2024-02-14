import { useNavigate } from 'react-router-dom';
import './style.css';

import RewardBalanceBox from 'components/Rewards/RewardBalanceBox';
import RewardHeader from 'components/Rewards/RewardHeader';
import RewardItems from 'components/Rewards/RewardItems';
import ModalHeader from 'components/Modals/ModalHeader';

const Rewards = () => {
  const navigate = useNavigate();

  return (
    <div className='rewards'>
      <div className='reward_large_header'>
        <RewardHeader to='/profile' header='Rewards' />
      </div>

      <div className='reward_small_header'>
        <ModalHeader header='Rewards' onModalClose={() => navigate(-1)} />
      </div>

      <div className='reward_main'>
        <RewardBalanceBox />

        <RewardItems />
      </div>
    </div>
  );
};

export default Rewards;
