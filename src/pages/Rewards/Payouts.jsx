import { useNavigate } from 'react-router-dom';

import RewardHeader from '../../components/Rewards/RewardHeader';
import ooniIcon from '../../assets/profile_images/Ooni_Coin.svg';
import exchange from '../../assets/profile_images/exchange-icon.svg';
import ModalButton from '../../components/Modals/ModalButton';
import ModalHeader from 'components/Modals/ModalHeader';

const Payouts = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rewards/payment');
  };

  return (
    <div className='rewards'>
      <div className='reward_large_header'>
        <RewardHeader to='/rewards' header='Withdrawal' />
      </div>

      <div className='reward_small_header'>
        <ModalHeader header='Withdrawal' onModalClose={() => navigate(-1)} />
      </div>

      <div className='payouts'>
        <div className='payout_container'>
          <div className='payout_container_top'>
            <h1>
              500 <span>Max</span>
            </h1>

            <p>
              <span>Balance</span>{' '}
              <div>
                <img src={ooniIcon} alt='Coin' /> <span>800</span>
              </div>
            </p>
          </div>

          <div className='middle'>
            <div>
              <img src={exchange} alt='' />
            </div>

            <div></div>
          </div>

          <div className='bottom'>
            <p>You will receive</p>

            <div className='rates'>
              <div>NGN</div>

              <div>₦50,000</div>
            </div>

            <div className='cta'>
              <ModalButton onClick={handleClick}>Next</ModalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
