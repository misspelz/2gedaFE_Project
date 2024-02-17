import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import copy from '../../assets/profile_images/copy.svg';

const ReferAndEarnBox = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(true);
  const [valid, setValid] = useState(null);

  function handleChange() {
    setEmail((email) => !email);

    setValid(/^\d{10}$/.test(phoneNumber));
  }

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className='reward_refer_box'>
      <div className='reward_refer_box_top'>
        <div className='reward_refer_box_top_left'>
          <h1>Refer and Earn</h1>
          <p>Refer friends, earn rewards.</p>
        </div>

        <div className='reward_refer_box_top_right'>
          <form>
            {email ? (
              <div className='register_type'>
                <input
                  type='email'
                  required
                  placeholder='Enter email address '
                />

                <button>Send</button>
              </div>
            ) : (
              <div className='register_type'>
                <PhoneInput
                  defaultCountry='NG'
                  placeholder='8100000000'
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className=''
                />
                <button>Send</button>
              </div>
            )}
          </form>

          <button onClick={handleChange}>
            {email ? 'Use phone number instead' : 'Use email address instead'}
          </button>
        </div>
      </div>

      <div className='reward_refer_box_bottom'>
        <span>2geda.net/faithawokunle </span>{' '}
        <button>
          <img src={copy} alt='COPY' />
        </button>
      </div>
    </div>
  );
};

export default ReferAndEarnBox;
