import { Select, Space } from 'antd';

const CustomDropdown = ({ stallValue, menu }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      defaultValue={stallValue}
      style={{
        width: '100%',
        height: '43px',
      }}
      onChange={handleChange}
      options={menu}
    />
  );
};

export default CustomDropdown;
