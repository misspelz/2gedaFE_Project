import './style.css';
import MainLayout from '../../Layout/MainLayout';
import ProfileOverview from '../../components/ProfileComponents/ProfileOverview';
import ProfileAds from '../../components/ProfileComponents/ProfileAds';
import ProfileStickersAndMessages from '../../components/ProfileComponents/ProfileStickersAndMessages';

const Profile = () => {
  return (
    <div className='home-container'>
      <MainLayout>
        <div className='profile_container'>
          <div className='profile_overview'>
            <ProfileOverview heading='Personal' />
          </div>

          <div className='profile_ads'>
            <ProfileAds />
          </div>

          <div className='profile_users'>
            <ProfileStickersAndMessages />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Profile;
