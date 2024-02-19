const ProfileStickersBox = () => {
  return (
    <div className='profile_sticker_box'>
      {Array.from({ length: 8 }, (_, i) => i + 1).map((img) => (
        <img
          src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
          alt=''
          key={img}
        />
      ))}
    </div>
  );
};

export default ProfileStickersBox;
