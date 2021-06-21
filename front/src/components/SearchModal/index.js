import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useMemo } from 'react';
import {
  AimButtonWrapper,
  SearchWrapper,
  CustonAimBtn,
  CloseModalButton,
  SearchModalWrapper,
  SearchModalHeader,
  SearchModalInput,
  SearchModalMain,
} from './style';
import { useKeyword } from 'apis/useKeyword';
import PropTypes from 'prop-types';

const SearchModal = ({ fetchedData, setFetchedData, searchValue, onChangeValue, show, onCloseModal }) => {
  const divStyle = useMemo(() => ({ overflow: 'auto', height: '60vh' }));
  const liStyle = useMemo(
    () => ({
      cursor: 'pointer',
      marginBottom: '10px',
      fontSize: '1rem',
      color: 'grey',
      borderBottom: '1px solid grey',
      paddingBottom: 5,
    }),
    [],
  );
  const ulStyle = useMemo(() => ({ listStyle: 'none', padding: '0 40px' }));

  const SearchKeyword = useCallback((e) => {
    e.preventDefault();
    useKeyword(searchValue);
    onCloseModal();
  });

  // fetchedData가 매핑된 li 태그 클릭시 해당 키워드를 바탕으로 useKeyword() 함수 호출
  const ClickKeyword = useCallback((keyword) => {
    useKeyword(keyword);
    onCloseModal();
  });

  // searcValue 값이 모두 지워지면, FetchedData를 빈 배열로 만듬
  useEffect(() => {
    if (!searchValue) {
      setFetchedData([]);
    }
  }, [searchValue]);

  return (
    // show.toString() 을 해주는 이유는 emotion을 통해 true/false를 관리하기 위해서 입니다.
    <SearchModalWrapper show={show.toString()}>
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
        <ul style={ulStyle}>
          {searchValue && (
            <li style={{ margin: '15px 0' }}>
              <b style={{ fontSize: '1.2rem' }}>{searchValue}</b> 에 대한 검색 결과입니다
            </li>
          )}
          {/* 빈 배열일 경우에는 후위(false)로 넘어감 */}
          {fetchedData.length ? (
            <div style={divStyle}>
              {fetchedData.map((data) => (
                <li key={data.id} style={liStyle} onClick={() => ClickKeyword(data.place_name)}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bolder' }}>{data.place_name}</div>
                  <span style={{ fontSize: '0.7rem' }}>{data.address_name}</span>
                </li>
              ))}
            </div>
          ) : (
            // fetchedData를 빈 배열 때 기존 검색결과 제거
            <div />
          )}
        </ul>
      </div>
    </SearchModalWrapper>
  );
};

SearchModal.propTypes = {
  fetchedData: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default SearchModal;
