import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

import DesktopProfileOptions from './DesktopProfileOptions';
import MobileProfileOptions from './MobileProfileOptions';
// import backArrow from '../../assets/profile_images/back-arrow.svg';
import optionIcon from '../../assets/profile_images/option-icon.svg';
import mobileOption from '../../assets/profile_images/mobileOptionIcon.svg';

const ProfileOverviewNav = ({ type }) => {
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
          <FaArrowLeft className='arrow_back' />
        </button>
        <span>{type} Profile</span>
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
          />
        )}
      </div>

      {/* MOBILE VERSION */}
      <MobileProfileOptions
        mobileProfileOptions={mobileProfileOptions}
        setMobileProfileOptions={setMobileProfileOptions}
      />
    </nav>
  );
};

export default ProfileOverviewNav;
