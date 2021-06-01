// 메인 창에 뜨는 검색창 (input)

import React, { useCallback, useState } from 'react';
import { SearchForm, SearchInputWrapper } from './style';
import { DownOutlined } from '@ant-design/icons';
import SearchModal from '../SearchModal';
import { getList } from '../../apis/useGetList';

const SearchInput = () => {
  // 모달 상태 관리
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const onChangeValue = useCallback((e) => {
    setSearchValue(e.target.value);
    getList(e.target.value);
  }, []);

  // 검색 모달 켜기
  const onClickSearchModal = useCallback(() => {
    setSearchValue('');
    setShowSearchModal(true);
  }, []);

  // props로 내려줄 모달 닫기 버튼에 대한 함수
  const onCloseModal = useCallback(() => {
    setShowSearchModal(false);
  }, []);

  return (
    <>
      <SearchInputWrapper>
        <SearchForm onClick={onClickSearchModal}>
          {/* 후에 현재 위치를 받아와 location을 표시 */}
          {searchValue ? (
            <p>
              <b>'{searchValue}'</b> 에 대한 검색 결과입니다
            </p>
          ) : (
            <p>구, 동, 건물명, 역 등으로 검색</p>
          )}
          <DownOutlined />
        </SearchForm>
      </SearchInputWrapper>
      <SearchModal
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeValue={onChangeValue}
        show={showSearchModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default SearchInput;
