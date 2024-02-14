import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import coin from '../../assets/profile_images/Ooni Coin.png';

const RewardBalanceBox = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='reward_balance_box'>
      <div className='reward_balance_box_top'>
        <h5>Balance</h5>

        <Link to='/rewards/histories'>
          <span>View history</span>
          <IoIosArrowForward className='reward_balance_box_top_arrow' />
        </Link>
      </div>

      <div className='reward_balance_box_middle'>
        <img src={coin} alt='' />

        <span className='balance'>0.00</span>

        <span className='show'>
          {show ? <FaEye className='eye' /> : <FaEyeSlash className='eye' />}
        </span>
      </div>

      <Link to='/rewards/payouts'>Request withdrawal</Link>
    </div>
  );
};

export default RewardBalanceBox;
