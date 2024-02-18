import { useState } from 'react';
import { MdEdit, MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { Checkbox } from 'antd';
import { IoShieldCheckmark } from 'react-icons/io5';
import { category, day, month, years } from 'utils/helper';

import ModalWrapper from '../Modals/ModalWrapper';
import ModalHeader from '../Modals/ModalHeader';
import img from '../../assets/profile_images/profile-cover.png';
import mark from '../../assets/profile_images/mark.svg';
import ProfileInput from '../ProfileComponents/ProfileInput';
import ProfileEditOption from '../ProfileComponents/ProfileEditOption';
import ModalButton from '../Modals/ModalButton';
import BusinessSwitch from './BusinessSwitch';
import CustomDropdown from 'components/Modals/CustomDropdown';

const EditBusinessProfile = ({ onModalClose }) => {
  const [cover, setCover] = useState('');
  const [profile, setProfile] = useState('');

  const handleCover = (event) => {
    setCover(URL.createObjectURL(event.target.files[0]));
  };

  const handleProfile = (event) => {
    setProfile(URL.createObjectURL(event.target.files[0]));
  };

  const onCheckedChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <ModalWrapper>
      <ModalHeader header='Edit Business Profile' onModalClose={onModalClose} />

      <div className='business_profile_container'>
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

            <p>Add business display picture</p>
          </div>
        </div>

        <div className='edit_business_profile_content_message'>
          Fill Business Details
        </div>

        <div className='edit_profile_content edit_business_profile_content'>
          {/* TOP */}
          <div>
            <div className='top_content'>
              <div className='create_username_input'>
                <label>Profession or Business details</label>
                <ProfileInput placeholder='business name' />
              </div>

              <div className='business_profile_category'>
                <div></div>

                <CustomDropdown stallValue='Category' menu={category} />
              </div>
            </div>

            <div className='bottom_content'>
              <ProfileEditOption header='Founded'>
                <CustomDropdown stallValue='Day' menu={day} />
                <CustomDropdown stallValue='Month' menu={month} />
                <CustomDropdown stallValue='Year' menu={years} />
              </ProfileEditOption>

              <div className='option title_not_needed'>
                <label>None</label>

                <ProfileInput placeholder='Address' />
              </div>
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <div className='top_content'>
              <div className='optio create_username_input'>
                <label>Create username</label>

                <div className='wrapper'>
                  <input type='text' placeholder='@validUsername' />

                  <img src={mark} alt='Mark' />
                </div>

                <div className='suppose'>
                  Try: <span>User123</span>, <span>2gedauser</span>,
                  <span> Hoto412</span>
                </div>
              </div>

              <div className='option title_not_needed'>
                <label>None</label>

                <div style={{ marginTop: '20px' }}>
                  <ProfileInput placeholder='Create Password' />
                </div>
              </div>
            </div>

            <div className='bottom_content textarea_container'>
              <textarea placeholder='Bio'></textarea>

              <span>Max 50 words</span>
            </div>
          </div>

          {/* BOTTOM */}
          <div>
            <div className='business_availability'>
              <h1>Set Business availability</h1>

              <div className='always_available'>
                <span>Always available</span>
                <Checkbox onChange={onCheckedChange} />
              </div>

              <div className='availability'>
                <BusinessSwitch day='Mon' />
                <BusinessSwitch day='Tue' />
                <BusinessSwitch day='Wed' />
                <BusinessSwitch day='Thur' />
                <BusinessSwitch day='Fri' />
                <BusinessSwitch day='Sat' />
                <BusinessSwitch day='Sun' />
              </div>
            </div>

            <div className='final_touch'>
              <p>
                <IoShieldCheckmark className='final_touch_mark' />{' '}
                <span>
                  Your data is protected under the Standard International User
                  Act
                </span>
              </p>

              <ModalButton>Create business</ModalButton>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default EditBusinessProfile;
