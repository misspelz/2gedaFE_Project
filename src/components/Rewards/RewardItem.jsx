import ooniCoin from '../../assets/profile_images/Ooni_Coin.svg';

const RewardItem = ({ title, icon, text, length, amount }) => {
  return (
    <li className='other_lists_type'>
      <div>
        <div className='reward_left'>
          <div className='icon'>
            <img src={icon} alt='' />
          </div>

          <div className='text'>
            <h1>
              {title} &nbsp;&nbsp;&nbsp;
              <span>
                <img src={ooniCoin} alt='' /> <span>+ {amount}</span>
              </span>
            </h1>

            <div>{text}</div>
          </div>
        </div>

        <button className='reward_right'>Claim</button>
      </div>

      <div className='progress_wrapper'>
        <div className='progress'></div>
      </div>

      <div>
        <span>1</span>/<span>{length}</span>
      </div>
    </li>
  );
};

export default RewardItem;
