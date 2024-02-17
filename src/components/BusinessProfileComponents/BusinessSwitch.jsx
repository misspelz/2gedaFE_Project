import { useState } from 'react';
import Switch from 'react-switch';
import { TimePicker } from 'antd';

const BusinessSwitch = ({ day }) => {
  const [checked, setChecked] = useState();

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const handleTimePickerChange = () => {
    console.log('Changed!');
  };

  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <div className='available'>
      <label htmlFor='small-radius-switch'>
        <Switch
          checked={checked}
          onChange={handleChange}
          handleDiameter={28}
          offColor='#ffff'
          onColor='#0A75C3'
          offHandleColor='#fafafa'
          onHandleColor='#0e171e'
          height={40}
          width={70}
          uncheckedIcon={<div className='uncheckedIcon'>{day}</div>}
          checkedIcon={<div className='checkedText'>{day}</div>}
          uncheckedHandleIcon={<div className='uncheckedHandle'></div>}
          checkedHandleIcon={<div className='checkedHandleIcon'></div>}
          className='react_switch'
          id='react_switch'
        />
      </label>

      <TimePicker.RangePicker
        use12Hours
        format='h:mm:ss A'
        onChange={onChange}
        className='ant_range_picker'
      />
    </div>
  );
};

export default BusinessSwitch;
