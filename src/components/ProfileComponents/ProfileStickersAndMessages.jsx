import { Link } from 'react-router-dom';
import ProfileStickersBox from './ProfileStickersBox';
import ProfileMessageLikeBox from './ProfileMessageLikeBox';

const ProfileStickersAndMessages = () => {
  return (
    <div className='stickersMessages'>
      <div>
        <div className='profile_sticker_header'>
          <h2>Stickers</h2>

          <Link to='/'>See all</Link>
        </div>

        <ProfileStickersBox />
      </div>

      <ProfileMessageLikeBox header='Messages' newMessage='10'>
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <li className='message' key={i + 1}>
            <div className='left_content'>
              <img
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
                alt='Friend'
              />
            </div>

            <div className='info'>
              <h1>Abraham Adesanya</h1>
              <p>How was your flight Joe, i couldnt text last night</p>
            </div>

            <div className='right_content update'>
              <div>12:00</div>

              <div className='active'></div>
            </div>
          </li>
        ))}
      </ProfileMessageLikeBox>
    </div>
  );
};

export default ProfileStickersAndMessages;
