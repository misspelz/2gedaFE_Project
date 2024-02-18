import { useState } from 'react';
import 'react-phone-number-input/style.css';
import { useRewards } from 'pages/Rewards/useRewards';

import RewardItem from './RewardItem';
import loginSymbol from '../../assets/profile_images/symbols_login.svg';
import ooniCoin from '../../assets/profile_images/Ooni_Coin.svg';
import createPost from '../../assets/profile_images/post-creation.svg';
import comments from '../../assets/profile_images/comments.svg';
import chat from '../../assets/profile_images/chat.svg';
import stereo from '../../assets/profile_images/stereo.svg';
import likes from '../../assets/profile_images/likes.svg';
import stick from '../../assets/profile_images/stick.svg';
import time from '../../assets/profile_images/time.svg';
import commerce from '../../assets/profile_images/commerce.svg';
import livestream from '../../assets/profile_images/livestream.svg';
import ticket from '../../assets/profile_images/ticket.svg';
import coinReward from '../../assets/profile_images/coin-rewards.svg';
import ReferAndEarnBox from './ReferAndEarnBox';

const RewardItems = () => {
  const { status, rewards } = useRewards();
  const [all, setAll] = useState(false);

  function handleSeeAll() {
    setAll((all) => !all);
  }

  console.log(status);
  console.log('=====================');
  console.log(rewards);

  return (
    <div className='reward_items'>
      <div className='reward_items_header'>
        <h2>Rewards</h2>

        <button onClick={handleSeeAll}>
          {!all ? 'View more' : 'View less'}
        </button>
      </div>

      <ul className='reward_items_lists'>
        {/* LOGIN CLAIM */}
        <li>
          <div className='reward_left'>
            <div className='icon'>
              <img src={loginSymbol} alt='' />
            </div>

            <div className='text'>
              <h1>
                Login &nbsp;&nbsp;&nbsp;
                <span>
                  <img src={ooniCoin} alt='' /> <span>+ 5</span>
                </span>
              </h1>

              <div>Daily login bonus</div>
            </div>
          </div>

          <button className='reward_right'>Claim</button>
        </li>

        {/* OTHER CLAIMS */}
        <RewardItem
          title='Post creation'
          icon={createPost}
          text='Create a new post'
          amount='5'
          length='6'
        />

        <RewardItem
          title='Comments'
          text='Comment on 20 posts on 2geda'
          icon={comments}
          amount='5'
          length='20'
        />

        <RewardItem
          title='Chat'
          text='Message 10 people on 2geda'
          icon={chat}
          amount='5'
          length='22'
        />

        <RewardItem
          title='Stick'
          text='Stick 25 people on 2geda'
          icon={stick}
          amount='5'
          length='14'
        />

        {all && (
          <RewardItem
            title='Likes'
            text='Like 50 posts on 2geda'
            icon={likes}
            amount='5'
            length='18'
          />
        )}

        {all && (
          <RewardItem
            title='Stickers'
            text='Reach 25 stickers on 2geda'
            icon={stick}
            amount='5'
            length='27'
          />
        )}

        {all && (
          <RewardItem
            title='Time rewards'
            text='Spend 2 hours on 2geda'
            icon={time}
            amount='5'
            length='3'
          />
        )}

        {all && (
          <RewardItem
            title='Commerce'
            text='Upload a product'
            icon={commerce}
            amount='5'
            length='7'
          />
        )}

        {all && (
          <RewardItem
            title='Livestream'
            text='Start a lovestream'
            icon={livestream}
            amount='5'
            length='7'
          />
        )}

        {all && (
          <RewardItem
            title='Livestream'
            text='Engage in a livestream'
            icon={livestream}
            length='7'
            amount='5'
          />
        )}

        {all && (
          <RewardItem
            title='Tickets'
            text='Buy an event ticket'
            icon={ticket}
            length='7'
            amount='5'
          />
        )}

        {all && (
          <RewardItem
            title='Tickets'
            text='See an event ticket'
            icon={ticket}
            length='7'
            amount='5'
          />
        )}

        {all && (
          <RewardItem
            title='Coin rewards'
            text='Accumulate 500 Ooni coins'
            icon={coinReward}
            length='7'
            amount='50'
          />
        )}

        {all && (
          <RewardItem
            title='Stereo'
            text='Stream 5 songs'
            icon={stereo}
            length='7'
            amount='5'
          />
        )}
      </ul>

      {/* REFER & EARN REGISTRATION */}
      <ReferAndEarnBox />
    </div>
  );
};

export default RewardItems;
