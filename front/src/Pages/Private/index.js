import React, { useCallback, useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const Private = () => {
  const [value, setValue] = useState('');
  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value],
  );

  const onSearch = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <div>
      Private 페이지입니다.
      <br />
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </div>
  );
};

export default Private;
