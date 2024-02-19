import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import DesktopProfileOptions from '../ProfileComponents/DesktopProfileOptions';
import MobileProfileOptions from '../ProfileComponents/MobileProfileOptions';
import optionIcon from '../../assets/profile_images/option-icon.svg';
import mobileOption from '../../assets/profile_images/mobileOptionIcon.svg';

const BusinessProfileHeader = () => {
  const [desktopProfileOptions, setDesktopProfileOptions] = useState(false);
  const [mobileProfileOptions, setMobileProfileOptions] = useState(false);

  const handleDesktopProfileOptions = () => {
    setDesktopProfileOptions(true);
  };

  const handleMobileProfileOptions = () => {
    setMobileProfileOptions(true);
  };

  return (
    <nav className='profile_nav'>
      <div className='profile_nav_left_btn'>
        <button>
          <IoArrowBackOutline className='arrow_back' />
        </button>
        <span>Business Profile</span>
      </div>

      <div className='profile_nav_middle_btn'>Profile</div>

      <div className='option_cta'>
        <button className='profile_nav_right_btn'>
          <img
            src={optionIcon}
            alt='Option'
            onClick={handleDesktopProfileOptions}
          />
          <img
            src={mobileOption}
            alt='Option'
            onClick={handleMobileProfileOptions}
          />
        </button>

        {/* DESKTOP VERSION */}
        {desktopProfileOptions && (
          <DesktopProfileOptions
            setDesktopProfileOptions={setDesktopProfileOptions}
            type='business'
          />
        )}
      </div>

      {/* MOBILE VERSION */}
      <MobileProfileOptions
        mobileProfileOptions={mobileProfileOptions}
        setMobileProfileOptions={setMobileProfileOptions}
        type='business'
      />
    </nav>
  );
};

export default BusinessProfileHeader;
