import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import cover from '../../assets/profile_images/profile-cover.png';
import { useProfileDetails } from './useProfileDetails';

const ProfileOverviewDetails = () => {
  const { status, data } = useProfileDetails();

  const [profileState, setProfileState] = useState(false);

  const handleProfileImage = () => {
    setProfileState(true);
  };

  console.log(status);
  console.log('=========================');
  console.log(data);

  return (
    <div
      style={{
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {profileState && (
        <div className='user_profile_image'>
          <div className='cancel_btn'>
            <button onClick={() => setProfileState(false)}>
              <IoArrowBackOutline className='arrow_back' />
            </button>
          </div>

          <div className='user_image_container'>
            <img
              src='https://images.unsplash.com/photo-1466119408458-cf3ad09fc676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
              alt=''
            />
          </div>
        </div>
      )}

      <div className='cover_image'>
        <img src={cover} alt='Cover Image' />
      </div>

      <div className='profile_details'>
        <img
          src='https://images.unsplash.com/photo-1466119408458-cf3ad09fc676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
          alt='Profile Image'
          onClick={handleProfileImage}
        />

        <h1>Charlotte Caria Faith</h1>

        <div className='location_expertise'>
          <span>Product Designer</span>
          <span>Lagos, Nigeria</span>
        </div>

        <div className='profile_details_btns'>
          <div className='stickers'>
            <span>Stickers</span>
            <span>18m</span>
          </div>

          <div className='stickers'>
            <span>Stickers</span>
            <span>23k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewDetails;