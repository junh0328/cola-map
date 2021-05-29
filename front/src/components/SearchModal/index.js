import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { AimButtonWrapper, SearchWrapper } from './style';
import Modal from '../Modal';
import { CloseModalButton, SearchModalWrapper, SearchModalHeader, SearchModalInput, SearchModalMain } from './style';
import { CustomAim } from '../AimButtonn/style';
import useKeyword from '../../apis/useKeyword';

const SearchModal = ({ searchValue, onChangeValue, show, onCloseModal }) => {
  const SearchKeyword = useCallback((e) => {
    e.preventDefault();
    useKeyword(searchValue);
    onCloseModal();
  });

  return (
    <Modal show={show}>
      <SearchModalWrapper show={show}>
        <SearchModalHeader>
          <CloseModalButton onClick={onCloseModal}>
            <CloseOutlined />
          </CloseModalButton>
          <span>위치 검색</span>
        </SearchModalHeader>
        <SearchModalMain>
          <form onSubmit={SearchKeyword}>
            <SearchWrapper>
              <SearchOutlined />
              <SearchModalInput
                value={searchValue}
                onChange={onChangeValue}
                type="text"
                placeholder="구, 동, 건물명, 역 등으로 검색"
              />
            </SearchWrapper>
            <AimButtonWrapper>
              <CustomAim onClick={SearchKeyword} />
            </AimButtonWrapper>
          </form>
        </SearchModalMain>
        <div>
          <ul style={{ listStyle: 'none' }}>
            {searchValue && (
              <li style={{ marginBottom: 15 }}>
                '<b style={{ fontSize: '1.2rem' }}>{searchValue}</b>' 에 대한 검색 결과입니다.
              </li>
            )}
            <li style={{ marginBottom: 15 }}>검색 결과입니다.</li>
            <li style={{ marginBottom: 15 }}>검색 결과입니다.</li>
            <li style={{ marginBottom: 15 }}>검색 결과입니다.</li>
            <li style={{ marginBottom: 15 }}>검색 결과입니다.</li>
          </ul>
        </div>
      </SearchModalWrapper>
    </Modal>
  );
};

export default SearchModal;
