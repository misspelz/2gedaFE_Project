import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModal } from 'Hooks/useModal';

import ModalHeader from 'components/Modals/ModalHeader';
import PayoutModal from 'components/Modals/PayoutModal';
import RewardHeader from 'components/Rewards/RewardHeader';
import ModalButton from 'components/Modals/ModalButton';
import coin from '../../assets/profile_images/Ooni_Coin.svg';

const Payment = () => {
  const [bank, setBank] = useState();
  const navigate = useNavigate();
  const { modal, setModal } = useModal();

  function handleClick(e) {
    // collecting the attribute (typeof) for the clicked button
    const type = e.target.attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  }

  return (
    <div className='rewards'>
      <div className='reward_large_header'>
        <RewardHeader to='/rewards/payouts' header='Payment' />
      </div>

      <div className='reward_small_header'>
        <ModalHeader header='Payment' onModalClose={() => navigate(-1)} />
      </div>

      <div className='payouts'>
        <div className='payment_container'>
          <div className='payment_container_top'>
            <div className='payment_container_top_row'>
              <p>You are withdrawing</p>

              <div className='coin_earned'>
                <img src={coin} alt='' />
                <h4>500</h4>
              </div>
            </div>

            <div className='payment_container_top_row'>
              <p>You will get</p>

              <h4>₦50,000</h4>
            </div>
          </div>

          <div className='payment_container_bottom'>
            <h2>Withdrawal information</h2>

            <DropdownList
              data={['Wema bank', 'Guanranty Trusted Bank', 'First Bank']}
              defaultValue='Select Bank'
              onChange={(nextValue) => setBank(nextValue)}
              //   className='advert_category_dropdown'
            />

            <div className='payment_input'>
              <input type='text' placeholder='Accont name' />
            </div>

            <div className='payment_input'>
              <input type='number' placeholder='Account number' />
            </div>

            <ModalButton onClick={handleClick} type='payment'>
              Process
            </ModalButton>

            {modal.payment && <PayoutModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
