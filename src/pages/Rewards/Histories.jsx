import { IoIosArrowDown } from 'react-icons/io';
import RewardHeader from '../../components/Rewards/RewardHeader';
import historyIcon from '../../assets/profile_images/history.svg';
import ooniIcon from '../../assets/profile_images/Ooni_Coin.svg';
import ModalHeader from 'components/Modals/ModalHeader';
import { useNavigate } from 'react-router-dom';
import { useHistory } from './useHistory';

const Histories = () => {
  const { status, claimedHistory } = useHistory();
  const navigate = useNavigate();

  console.log(claimedHistory);

  return (
    <div className='rewards'>
      <div className='reward_large_header'>
        <RewardHeader to='/rewards' header='Histories' />
      </div>

      <div className='reward_small_header'>
        <ModalHeader header='Histories' onModalClose={() => navigate(-1)} />
      </div>

      <div className='reward_main'>
        <h3>
          Aug <IoIosArrowDown />
        </h3>

        <ul className='histories_for_the_month'>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((li) => (
            <li key={li} className='history'>
              <div className='history_left'>
                <div className='logo'>
                  <img src={historyIcon} alt='' />
                </div>

                <div className='history_type'>
                  <h2>Referral Bonus</h2>

                  <p>commandcodes ✅</p>
                </div>
              </div>

              <div className='history_right'>
                <div>
                  <span>+</span>
                  <img src={ooniIcon} alt='' />
                  <span>500</span>
                </div>

                <div>Aug 24, 1:05 PM</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Histories;
