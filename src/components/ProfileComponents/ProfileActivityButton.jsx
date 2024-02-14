const ProfileActivityButton = ({ children, count }) => {
  return (
    <button className='profile_activity_btn'>
      <span>{children}</span> <span>{count}</span>
    </button>
  );
};

export default ProfileActivityButton;
