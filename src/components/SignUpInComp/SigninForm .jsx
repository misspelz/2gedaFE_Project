import { useState } from 'react';
import ActionButton from '../Commons/Button';
import InputField from '../Commons/InputField';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import 'react-phone-number-input/style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { url } from '../../utils';
import Lottie from 'lottie-react';
import preloader from '../../pages/Home/Animation - 1703321875032 (1).json';
import { UserInfoApi } from '../../utils/ApICalls';
import Modal from '../Modals/Modal';
import { EmailVerify } from '../Modals/EmailVerify';
import toast from 'react-hot-toast';

const SigninForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingUsername, setIsUsingUsername] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [IsEmailVerify, setIsEmailVerify] = useState(false);

  const navigate = useNavigate();

  const goToForgot = () => {
    navigate('/reset-password');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setEmail('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setUsername('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUseUsernameClick = () => {
    setIsUsingUsername(!isUsingUsername);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let formData = {};

      if (!isUsingUsername && username) {
        formData = {
          username: username,
          password: password,
        };
      } else if (isUsingUsername && email) {
        formData = {
          email: email,
          password: password,
        };
      } else {
        throw new Error('Please provide valid credentials.');
      }

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(formData),
        redirect: 'follow',
      };

      const response = await fetch(`${url}/api/user/login/`, requestOptions);

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400 || response.status === 401) {
          toast.error(result.error || 'Invalid credentials.');
        } else {
          throw new Error(result.error || 'An error occurred.');
        }
      } else {
        localStorage.setItem('authToken', result.token);

        // console.log("signinTOken", signinTOken);
        // const userInfo = await UserInfoApi(result.token);
        // console.log("userInfo", userInfo);
        // userInfo.data &&
        //   localStorage.setItem('2gedaUserInfo', JSON.stringify(userInfo?.data));

        // if (userInfo.data?.is_verified) {
        //   toast.success('Log in successful');
        //   navigate('/Home');
        // } else {
        //   setIsEmailVerify(true);
        // }

        toast.success('Log in successful');
        navigate('/Home');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='sign-form'>
        <div className='create-ead-txt'>Log In to your Account</div>
        <div className='greet-txt'>
          Welcome back! <br /> Enter your details to continue.
        </div>

        <form action='' onSubmit={handleLogin}>
          {!isUsingUsername && (
            <div className='inp-username'>
              <InputField
                placeholder={'Enter your username'}
                type={'text'}
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          )}

          {isUsingUsername && (
            <div className='inp-email'>
              <InputField
                placeholder={'Enter your email address'}
                type={'email'}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          )}

          <div className='pass-con'>
            <InputField
              placeholder={'Enter your password'}
              type={passwordVisible ? 'text' : 'password'}
              onChange={handlePasswordChange}
            />
            <div className='eye-box' onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <BsEyeSlashFill className='eye-icon' />
              ) : (
                <BsEyeFill className='eye-icon' />
              )}
            </div>
          </div>
          <div className='forg-pas-contan' onClick={goToForgot}>
            Forgot password?
          </div>
          <div className='use-phone' onClick={handleUseUsernameClick}>
            {isUsingUsername
              ? 'Use Username Instead'
              : 'Use Email Address Instead'}
          </div>

          <div className='btn-continu'>
            {isLoading ? (
              <Lottie
                animationData={preloader}
                style={{
                  width: '300px',
                  height: '100px',
                }}
              />
            ) : (
              <ActionButton
                label={'Continue'}
                bg={'pruplr'}
                onClick={handleLogin}
              />
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <NavLink
              to='/Signup'
              className='alr-ave'
              style={{ color: '#4f0da3' }}
            >
              New User? &nbsp;
              <span style={{ fontSize: '14px' }}>Sign Up</span>
            </NavLink>
          </div>
        </form>
      </div>

      {IsEmailVerify && (
        <Modal>
          <EmailVerify setIsEmailVerify={setIsEmailVerify} />
        </Modal>
      )}
    </>
  );
};

export default SigninForm;
