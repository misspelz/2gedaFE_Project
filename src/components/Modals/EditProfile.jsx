import { useState } from 'react';
import { MdOutlineAddPhotoAlternate, MdEdit } from 'react-icons/md';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
import img from '../../assets/profile_images/profile-cover.png';
import ProfileInput from '../ProfileComponents/ProfileInput';
import ProfileEditOption from '../ProfileComponents/ProfileEditOption';
import ModalButton from './ModalButton';
import CustomDropdown from './CustomDropdown';
import { day, genderData, month, years } from 'utils/helper';

const EditProfile = ({ onModalClose }) => {
  const [cover, setCover] = useState('');
  const [profile, setProfile] = useState('');

  const handleCover = (event) => {
    setCover(URL.createObjectURL(event.target.files[0]));
  };

  const handleProfile = (event) => {
    setProfile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <ModalWrapper>
      <ModalHeader header='Edit profile' onModalClose={onModalClose} />

      <div className='edit_profile_container'>
        <div className='edit_profile_images'>
          <div className='top_image'>
            <div className='top_image_container'>
              {cover ? (
                <img src={cover ? cover : img} alt='User Photo' />
              ) : (
                <div className='stalling'>
                  <MdOutlineAddPhotoAlternate className='stalling_photo_alt' />
                  <h2>Add cover photo</h2>
                </div>
              )}
            </div>

            <input
              type='file'
              id='cover'
              style={{ display: 'none' }}
              onChange={handleCover}
            />
            <label htmlFor='cover'>
              <MdEdit />
            </label>
          </div>

          <div className='bottom_image'>
            <div className='image'>
              {profile ? (
                <img src={profile} alt='' />
              ) : (
                <div className='stalling_image'></div>
              )}

              <input
                type='file'
                id='profile'
                style={{ display: 'none' }}
                onChange={handleProfile}
              />
              <label htmlFor='profile'>
                <MdEdit />
              </label>
            </div>

            <p>Add profile picture (you can select up to 5)</p>
          </div>
        </div>

        <div className='edit_profile_content'>
          <div>
            <ProfileInput placeholder='First name' />
            <ProfileInput placeholder='Last name' />
          </div>

          <div>
            <ProfileInput placeholder='Occupation' />
            <ProfileInput placeholder='Current city' />
          </div>

          <div>
            <ProfileEditOption header='Date of Birth'>
              <CustomDropdown stallValue='Day' menu={day} />
              <CustomDropdown stallValue='Month' menu={month} />
              <CustomDropdown stallValue='Year' menu={years} />
            </ProfileEditOption>

            <ProfileEditOption header='Gender'>
              <CustomDropdown stallValue='Gender' menu={genderData} />
            </ProfileEditOption>
          </div>

          <div className='textarea_container'>
            <textarea placeholder='Bio'></textarea>

            <span>Max 50 words</span>
          </div>

          <ModalButton>Save & Continue</ModalButton>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditProfile;
