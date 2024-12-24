import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useState } from 'react';

const { Search } = Input;

interface SearchLocationProps extends SearchProps {}

export const SearchLocation: React.FC<SearchLocationProps> = ({
  onChange,
  ...props
}) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (onChange) onChange(e);
  }

  return (
    <Search
      placeholder='Type location'
      allowClear
      value={value}
      {...props}
      onChange={handleChange}
    />
  );
};
