import './profile.css';
import ProfileOverviewDetails from './ProfileOverviewDetails';
import ProfileOverviewNav from './ProfileOverviewNav';
import ads from '../../assets/profile_images/Jumia-Celebrate-the-Game.png';
import ProfileActivities from './ProfileActivities';

const ProfileOverview = ({ heading }) => {
  return (
    <div className='overview'>
      <div className='profile_top_content'>
        <ProfileOverviewNav type={heading} />
        <ProfileOverviewDetails />
      </div>

      <div className='profile_middle_content'>
        <img src={ads} alt='Ads' />
      </div>

      <div className='profile_bottom_content'>
        <ProfileActivities />
      </div>
    </div>
  );
};

export default ProfileOverview;
