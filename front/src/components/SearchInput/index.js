import React, { useCallback, useState } from 'react';
import { SearchForm, SearchInputWrapper } from './style';
import { DownOutlined } from '@ant-design/icons';
import Modal from '../Modal';
import SearchModal from '../SearchModal';

const SearchInput = () => {
  // 모달 상태 관리
  const [showSearchModal, setShowSearchModal] = useState(false);

  // 검색 모달 켜기
  const onClickSearchModal = useCallback(() => {
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
          <p>경기도 의왕시 포일로 13-2</p>
          <DownOutlined />
        </SearchForm>
      </SearchInputWrapper>
      <SearchModal show={showSearchModal} onCloseModal={onCloseModal} />
    </>
  );
};

export default SearchInput;
