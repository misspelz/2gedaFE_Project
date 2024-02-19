import ProfileActivityButton from './ProfileActivityButton';
import image from '../../assets/profile_images/post-1.png';
import kuda from '../../assets/profile_images/kuda-ads.png';

const ProfileActivities = () => {
  return (
    <div className='profile_activities'>
      <div className='cta-btns'>
        <ProfileActivityButton count={25}>All Posts</ProfileActivityButton>
        <ProfileActivityButton count={25}>Images</ProfileActivityButton>
        <ProfileActivityButton count={25}>Videos</ProfileActivityButton>
        <ProfileActivityButton count={25}>Voice note</ProfileActivityButton>
        <ProfileActivityButton count={25}>Location</ProfileActivityButton>
        <ProfileActivityButton count={25}>Music</ProfileActivityButton>
        <ProfileActivityButton count={25}>Files</ProfileActivityButton>
      </div>

      <div className='profile_posts'>
        {Array.from({ length: 24 }, (_, i) => i + 1).map((i) => (
          <div className='profile_posts_container' key={i}>
            <img src={image} alt='POST' />
          </div>
        ))}
      </div>

      <div className='profile_activities_bottom_ads'>
        <img src={kuda} alt='KUDA' />
      </div>
    </div>
  );
};

export default ProfileActivities;
