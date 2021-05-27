import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import { AimButtonWrapper, SearchWrapper } from './style';
import Modal from '../Modal';
import { CloseModalButton, SearchModalWrapper, SearchModalHeader, SearchModalInput, SearchModalMain } from './style';
import { CustomAim } from '../AimButtonn/style';
import useKeyword from '../../apis/useKeyword';

const SearchModal = ({ show, onCloseModal }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeValue = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const SearchKeyword = useCallback((e) => {
    e.preventDefault();
    if (searchValue) {
      alert(`검색할 장소: ${searchValue}`);
    } else {
      alert('값이 제대로 넘어오지 않았습니다 ㅠㅠ');
    }
    // 창을 닫은 뒤, 해당 키워드 함수 실행
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
