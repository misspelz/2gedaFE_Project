import { IoMdTrash } from 'react-icons/io';
import { IoMailOpenOutline } from 'react-icons/io5';
import './style.css';
import MainLayout from '../../Layout/MainLayout';
import BusinessProfileHeader from '../../components/BusinessProfileComponents/BusinessProfileHeader';
import BusinessProfileDetails from '../../components/BusinessProfileComponents/BusinessProfileDetails';
import ads from '../../assets/profile_images/Jumia-Celebrate-the-Game.png';
import ModalButton from '../../components/Modals/ModalButton';
import ProfileAds from '../../components/ProfileComponents/ProfileAds';
import BusinessPosts from '../../components/BusinessProfileComponents/BusinessPosts';
import ProfileMessageLikeBox from '../../components/ProfileComponents/ProfileMessageLikeBox';

const BusinessProfile = () => {
  return (
    <div className='home-container'>
      <MainLayout>
        <div className='profile_container'>
          <div className='profile_overview'>
            <div className='overview'>
              <div className='profile_top_content'>
                <BusinessProfileHeader />

                {/* DETAILS */}
                <BusinessProfileDetails />
              </div>

              <div className='business_posts_container'>
                <h1>My Posts</h1>

                <BusinessPosts />
              </div>

              <div className='profile_middle_content'>
                <img src={ads} alt='Ads' />
              </div>

              <div className='manage_store_btn'>
                <ModalButton>Manage store</ModalButton>
              </div>
            </div>
          </div>

          <div className='profile_ads'>
            <ProfileAds />
          </div>

          <div className='profile_users'>
            <ProfileMessageLikeBox header='Top Businesses' newMessage='8'>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <li className='message' key={i + 1}>
                  <div className='left_content'>
                    <img
                      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
                      alt='Friend'
                    />

                    <div className='info'>
                      <h1>Forte oil</h1>
                      <p>Oil and Gas</p>
                    </div>
                  </div>

                  <div className='right_content rating'>4.5</div>
                </li>
              ))}
            </ProfileMessageLikeBox>

            <ProfileMessageLikeBox header='Cart' newMessage='10'>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <li className='message' key={i + 1}>
                  <div className='left_content'>
                    <img
                      src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2xpbSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D'
                      alt='Friend'
                      id='cart'
                    />
                    <div className='info'>
                      <h1>Semi detached duplex</h1>
                      <p className='price'>#200,000</p>
                      <p className='location'>Lekki, Lagos</p>
                    </div>
                  </div>

                  <div className='right_content cart'>
                    <div className='trash'>
                      <IoMdTrash />
                    </div>

                    <div className='mail'>
                      <IoMailOpenOutline />
                    </div>
                  </div>
                </li>
              ))}
            </ProfileMessageLikeBox>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default BusinessProfile;
