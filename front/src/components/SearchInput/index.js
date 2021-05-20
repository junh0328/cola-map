import React from 'react';
import { SearchForm, SearchInputWrapper } from './style';
import { DownOutlined } from '@ant-design/icons';

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <SearchForm onClick={() => alert(' 폼 클릭')}>
        <p>경기도 의왕시 포일로 13-2</p>
        <DownOutlined />
      </SearchForm>
    </SearchInputWrapper>
  );
};

export default SearchInput;
