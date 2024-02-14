import { Outlet } from 'react-router-dom';
import MainLayout from './MainLayout';

const RewardLayout = () => {
  return (
    <div className='home-container'>
      <MainLayout>
        <div className='reward_container'>
          <div className='left'>
            <Outlet />
          </div>

          <div className='right'>
            <div className='how_to_earn_container'>
              <h2>How to earn</h2>

              <ul className='lists'>
                <li>
                  <span>1</span>{' '}
                  <span>Share your referral link with your friends</span>
                </li>

                <li>
                  <span>2</span>{' '}
                  <span>
                    Your friend clicks and registers through your referral link
                  </span>
                </li>

                <li>
                  <span>3</span> <span>You received your reward</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default RewardLayout;
