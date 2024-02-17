import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const RewardHeader = ({ to, header }) => {
  return (
    <div className='reward_header'>
      <div className='left'>
        <Link to={to}>
          <FaArrowLeft />
        </Link>

        <span>{header}</span>
      </div>

      <div></div>
    </div>
  );
};

export default RewardHeader;
