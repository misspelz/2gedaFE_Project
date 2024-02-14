import { useState } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/styles.css';
import { IoCameraOutline } from 'react-icons/io5';
import './third.css';

import PreviewNewAd from './PreviewNewAd';
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper';
import { useModal } from '../../Hooks/useModal';
import ModalContainer from './ModalContainer';
import ModalButton from './ModalButton';
import { MdOutlineCameraAlt } from 'react-icons/md';

const NewAd = ({ onModalClose }) => {
  const { modal, setModal } = useModal();
  const [adCategory, setAdCategory] = useState('Select Advert Category');
  const [startDate, setStartDate] = useState({
    month: 'Month',
    day: 'Day',
    year: 'Year',
  });
  const [endDate, setEndDate] = useState({
    month: 'Month',
    day: 'Day',
    year: 'Year',
  });
  /**
   * Below are "Date of Birth" values
   */
  const monthData = Array.from({ length: 31 }, (_, i) => i + 1);
  const dayData = Array.from({ length: 12 }, (_, i) => i + 1);
  const fullYearData = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  // FOR MODAL ONLY
  function handleClick(e) {
    const type = e.target.closest('#btn').attributes.typeof.nodeValue;

    setModal((prev) => ({
      ...prev,
      [type]: true,
    }));
  }

  return (
    <ModalWrapper>
      <ModalHeader header='New Ad' onModalClose={onModalClose} />

      <div className='new_ad_container'>
        {/* ALERT BOX */}
        <div className='update_info_box'>
          <img src='images/brod.png' alt='' />
          <div className='message'>
            Reach out to World Audience in Large Numbers while you Pay Less.
          </div>
        </div>

        <div className='ad_form'>
          {/* <form action=''> */}
          <div className='advert_row'>
            {/* ADVERT INFORMATION */}
            <div className='advert_col'>
              <label htmlFor=''>Advert information</label>

              <div className='advert_title'>
                <input type='text' placeholder='Advert Titler' />
                <div className='info'>
                  <span>*</span>This will not be visible to others
                </div>
              </div>

              <div className='advert_category'>
                <DropdownList
                  value={adCategory}
                  onChange={(nextValue) => setAdCategory(nextValue)}
                  data={['Phone IMEI', 'Serial No']}
                  className='advert_category_dropdown'
                />
              </div>
            </div>

            {/* ADVERT DURATION */}
            <div className='advert_col'>
              <label htmlFor=''></label>

              <div className='advert_duration'>
                <label htmlFor=''>Duration</label>

                <div className='advert_duration_grid'>
                  <div className='grid_item'>24 hours</div>
                  <div className='grid_item'>48 hours</div>
                  <div className='grid_item'>72 hours</div>
                  <div className='grid_item'>1 week</div>
                  <div className='grid_item'>2 week</div>
                  <div className='grid_item'>1 month</div>
                  <div className='grid_item'>3 months</div>
                  <div className='grid_item'>1 year</div>
                </div>
              </div>
            </div>
          </div>

          <div className='advert_row'>
            <div className='advert_col'>
              <label htmlFor=''>Start date</label>

              <div className='advert_date start_date'>
                <DropdownList
                  data={monthData}
                  value={startDate.month}
                  onChange={(nextValue) =>
                    setStartDate((prev) => ({
                      ...prev,
                      month: nextValue,
                    }))
                  }
                  className='advert_category_dropdown'
                />
                <DropdownList
                  data={dayData}
                  value={startDate.day}
                  onChange={(nextValue) =>
                    setStartDate((prev) => ({
                      ...prev,
                      day: nextValue,
                    }))
                  }
                  className='advert_category_dropdown'
                />
                <DropdownList
                  data={fullYearData}
                  value={startDate.year}
                  onChange={(nextValue) =>
                    setStartDate((prev) => ({
                      ...prev,
                      year: nextValue,
                    }))
                  }
                  className='advert_category_dropdown'
                />
              </div>
            </div>

            <div className='advert_col'>
              <label htmlFor=''>End date</label>

              <div className='advert_date end_date'>
                <DropdownList
                  data={monthData}
                  value={endDate.month}
                  onChange={(nextValue) =>
                    setEndDate((prev) => ({
                      ...prev,
                      month: nextValue,
                    }))
                  }
                  className='advert_category_dropdown'
                />
                <DropdownList
                  data={dayData}
                  value={endDate.day}
                  onChange={(nextValue) =>
                    setEndDate((prev) => ({
                      ...prev,
                      day: nextValue,
                    }))
                  }
                  className='advert_category_dropdown'
                />
                <DropdownList
                  data={fullYearData}
                  value={endDate.year}
                  onChange={(nextValue) =>
                    setEndDate((prev) => ({
                      ...prev,
                      year: nextValue,
                    }))
                  }
                  className='advert_category_dropdown'
                />
              </div>
            </div>
          </div>

          <div className='advert_row'>
            <div className='advert_image'>
              <label htmlFor=''>Upload advert image</label>

              <button className='select_advert_image'>
                <input
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  id='new_ads'
                />

                <label htmlFor='new_ads'>
                  <MdOutlineCameraAlt className='camera' />
                  Select file
                </label>
              </button>

              <span className='advert_image_name'>filename.jpg</span>
            </div>
          </div>

          <div className='advert_row'>
            <div className='advert_note'>
              <textarea type='text' placeholder='Add a note(optional)' />
            </div>
          </div>

          <div
            className='new_ad_button'
            id='btn'
            typeof='create_advert'
            onClick={handleClick}
          >
            <ModalButton>Continue</ModalButton>
          </div>

          {modal.create_advert && (
            <ModalContainer type='create_advert'>
              <PreviewNewAd />
            </ModalContainer>
          )}
          {/* </form> */}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default NewAd;
//
