import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { AimButtonWrapper, SearchWrapper } from './style';
import Modal from '../Modal';
import { CloseModalButton, SearchModalWrapper, SearchModalHeader, SearchModalInput, SearchModalMain } from './style';
import { CustomAim } from '../AimButtonn/style';

const SearchModal = ({ show, onCloseModal }) => {
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
          <form>
            <SearchWrapper>
              <SearchOutlined />
              <SearchModalInput type="text" placeholder="구, 동, 건물명, 역 등으로 검색" />
            </SearchWrapper>
            <AimButtonWrapper>
              <CustomAim />
            </AimButtonWrapper>
          </form>
        </SearchModalMain>
        <div>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: 15 }}>검색 결과입니다.</li>
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
