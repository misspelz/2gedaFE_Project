const ProfileEditOption = ({ children, header }) => {
  return (
    <div className='option'>
      <label>{header}</label>

      <div className='content'>{children}</div>
    </div>
  );
};

export default ProfileEditOption;
