import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ placeholder }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <div className='password_input'>
      <input type={show ? 'text' : 'password'} placeholder={placeholder} />

      {show ? (
        <FaEyeSlash className='show_eye' onClick={handleClick} />
      ) : (
        <FaEye className='show_eye' onClick={handleClick} />
      )}
    </div>
  );
};

export default PasswordInput;
