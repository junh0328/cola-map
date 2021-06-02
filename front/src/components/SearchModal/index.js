import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { AimButtonWrapper, SearchWrapper, CustonAimBtn } from './style';
import Modal from '../Modal';
import { CloseModalButton, SearchModalWrapper, SearchModalHeader, SearchModalInput, SearchModalMain } from './style';
import useKeyword from '../../apis/useKeyword';

const SearchModal = ({ fetchedData, setFetchedData, searchValue, onChangeValue, show, onCloseModal }) => {
  const SearchKeyword = useCallback((e) => {
    e.preventDefault();
    useKeyword(searchValue);
    onCloseModal();
  });

  // fetchedData가 매핑된 li 태그 클릭시 해당 키워드를 바탕으로 useKeyword() 함수 호출
  const ClickKeyword = useCallback((keyword) => {
    alert(`keyword로 검색: ${keyword}`);
    useKeyword(keyword);
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
              <CustonAimBtn onClick={SearchKeyword} />
            </AimButtonWrapper>
          </form>
        </SearchModalMain>
        <div>
          <ul style={{ listStyle: 'none', padding: '0 40px' }}>
            {searchValue && (
              <li style={{ marginBottom: 15 }}>
                <b style={{ fontSize: '1.2rem' }}>{searchValue}</b> 에 대한 검색 결과입니다.
              </li>
            )}
            {fetchedData.length > 0 && (
              <div>
                {fetchedData.map((data) => (
                  <li
                    key={data.id}
                    style={{
                      cursor: 'pointer',
                      marginBottom: '10px',
                      fontSize: '1rem',
                      color: 'grey',

                      borderBottom: '1px solid grey',
                      paddingBottom: 5,
                    }}
                    onClick={() => ClickKeyword(data.place_name)}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bolder' }}>{data.place_name}</div>
                    <span style={{ fontSize: '0.7rem' }}>{data.address_name}</span>
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      </SearchModalWrapper>
    </Modal>
  );
};

export default SearchModal;
