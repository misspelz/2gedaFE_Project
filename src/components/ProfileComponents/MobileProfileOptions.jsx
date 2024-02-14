import { Link } from 'react-router-dom';
import logo from '../../assets/profile_images/2geda.png';
import EditProfile from '../Modals/EditProfile';
import RequestVerification from '../Modals/RequestVerification';
import ManageAdvert from '../Modals/ManageAdvert';
import Gadget from '../Modals/Gadget';
import { useModal } from '../../Hooks/useModal';
import ModalContainer from '../Modals/ModalContainer';
import ChangePasswordModal from '../Modals/ChangePasswordModal';
import EditBusinessProfile from '../BusinessProfileComponents/EditBusinessProfile';

const MobileProfileOptions = ({
  mobileProfileOptions,
  setMobileProfileOptions,
  type,
}) => {
  const { modal, setModal } = useModal();

  /**
   * ---------------------
   * I am accessing the type of modal to be open through the attribute (typeof) passed to each button list :)
   * ---------------------
   */
  const handleClick = (e) => {
    // collecting the attribute (typeof) for the clicked button
    const type = e.target.attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  return (
    <div
      className={`profileOptionsMobile ${
        mobileProfileOptions ? 'profileOptionsMobileActive' : ''
      }`}
    >
      <div className='profileOptionsMobile_top'>
        <div>
          <img src={logo} alt='LOGO' />
        </div>

        <button onClick={() => setMobileProfileOptions(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
          >
            <path
              d='M13.1027 12.0036L19.3277 5.78801C19.4473 5.64229 19.5084 5.45729 19.4991 5.269C19.4899 5.08071 19.4109 4.90259 19.2776 4.76929C19.1443 4.63599 18.9662 4.55704 18.7779 4.54779C18.5896 4.53854 18.4046 4.59966 18.2589 4.71926L12.0433 10.9443L5.82766 4.71926C5.68193 4.59966 5.49694 4.53854 5.30865 4.54779C5.12036 4.55704 4.94224 4.63599 4.80894 4.76929C4.67564 4.90259 4.59669 5.08071 4.58744 5.269C4.57819 5.45729 4.63931 5.64229 4.75891 5.78801L10.9839 12.0036L4.75891 18.2193C4.61807 18.3615 4.53906 18.5535 4.53906 18.7536C4.53906 18.9538 4.61807 19.1458 4.75891 19.288C4.90226 19.4266 5.09387 19.5041 5.29328 19.5041C5.49269 19.5041 5.6843 19.4266 5.82766 19.288L12.0433 13.063L18.2589 19.288C18.4023 19.4266 18.5939 19.5041 18.7933 19.5041C18.9927 19.5041 19.1843 19.4266 19.3277 19.288C19.4685 19.1458 19.5475 18.9538 19.5475 18.7536C19.5475 18.5535 19.4685 18.3615 19.3277 18.2193L13.1027 12.0036Z'
              fill='black'
              fillOpacity='0.4'
            />
          </svg>
        </button>
      </div>

      <div className='middle'>
        <ul className='profileOptions_lists'>
          {/* Account Setting */}
          <li onClick={handleClick} typeof='setting'>
            Account Settings
          </li>
          {modal.setting && (
            <ModalContainer type='setting'>
              {type === 'business' ? <EditBusinessProfile /> : <EditProfile />}
            </ModalContainer>
          )}

          {/*  Manage Business Modal */}
          <li>
            <Link to='/manage-business'>Manage Businesses</Link>
          </li>

          {/* Rewards Modal */}
          <li>
            <Link to='/rewards'>Rewards</Link>
          </li>

          {/* Request Verification */}
          <li onClick={handleClick} typeof='requestVerification'>
            Request Verification
          </li>
          {modal.requestVerification && (
            <ModalContainer type='requestVerification'>
              <RequestVerification />
            </ModalContainer>
          )}

          {/*  Manage Advert */}
          <li onClick={handleClick} typeof='manageadvert'>
            Manage Adverts
          </li>
          {modal.manageadvert && (
            <ModalContainer type='manageadvert'>
              <ManageAdvert />
            </ModalContainer>
          )}

          {/* Gadget */}
          <li onClick={handleClick} typeof='gadgets'>
            Phone IMEI/ Gadget serial no
          </li>
          {modal.gadgets && (
            <ModalContainer type='gadgets'>
              <Gadget />
            </ModalContainer>
          )}

          {/* Change password */}
          <li onClick={handleClick} typeof='password'>
            Change password
          </li>
          {modal.password && (
            <ModalContainer type='password'>
              <ChangePasswordModal />
            </ModalContainer>
          )}
        </ul>

        <div className='mid_user'>
          <Link to='/'>Sign in another account</Link>

          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='32'
              viewBox='0 0 33 32'
              fill='none'
            >
              <path
                d='M29.7371 26.4999C27.8712 23.2856 24.8845 20.873 21.3496 19.7249C23.044 18.7173 24.3607 17.1814 25.0974 15.3529C25.8342 13.5245 25.9502 11.5047 25.4278 9.60396C24.9053 7.70316 23.7733 6.02648 22.2055 4.83148C20.6377 3.63647 18.7209 2.98926 16.7496 2.98926C14.7783 2.98926 12.8616 3.63647 11.2938 4.83148C9.72601 6.02648 8.59394 7.70316 8.07148 9.60396C7.54902 11.5047 7.66508 13.5245 8.40184 15.3529C9.13859 17.1814 10.4553 18.7173 12.1496 19.7249C8.61475 20.873 5.62805 23.2856 3.76213 26.4999C3.67052 26.6506 3.62207 26.8235 3.62207 26.9999C3.62207 27.1762 3.67052 27.3492 3.76213 27.4999C3.8476 27.6531 3.97284 27.7805 4.12464 27.8685C4.27644 27.9565 4.44918 28.0019 4.62463 27.9999H28.8746C29.0501 28.0019 29.2228 27.9565 29.3746 27.8685C29.5264 27.7805 29.6517 27.6531 29.7371 27.4999C29.8287 27.3492 29.8772 27.1762 29.8772 26.9999C29.8772 26.8235 29.8287 26.6506 29.7371 26.4999Z'
                fill='white'
              />
            </svg>
          </div>

          <p>Faith Awolewa omowumi</p>
        </div>
      </div>

      <div className='bottom'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
        >
          <path
            d='M21.75 10.75L27 16L21.75 21.25'
            stroke='#E71515'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13 16H27'
            stroke='#E71515'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13 27H6C5.73478 27 5.48043 26.8946 5.29289 26.7071C5.10536 26.5196 5 26.2652 5 26V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H13'
            stroke='#E71515'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <span>Logout</span>
      </div>
    </div>
  );
};

export default MobileProfileOptions;
