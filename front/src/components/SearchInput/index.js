// 메인 창에 뜨는 검색창 (input)

import React, { useCallback, useEffect, useState } from 'react';
import { SearchForm, SearchInputWrapper } from './style';
import { DownOutlined } from '@ant-design/icons';
import SearchModal from '../SearchModal';
import { getSearchData } from 'apis/useGetSearchData';

const SearchInput = () => {
  // 모달 상태 관리
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const [fetchedData, setFetchedData] = useState([]);

  const onChangeValue = useCallback((e) => {
    setSearchValue(e.target.value);
    if (e.target.value !== '') {
      (async () => {
        await getSearchData(e.target.value).then((result) => {
          // 데이터 배열이 5개 이상이면 5개로 자른다.
          if (result.length > 5) {
            result.length = 5;
          }
          setFetchedData(result);
        });
      })();
    }
  }, []);

  useEffect(() => {
    console.log('fetchedData: ', fetchedData);
  }, [fetchedData]);

  // 검색 모달 켜기
  const onClickSearchModal = useCallback(() => {
    setSearchValue('');
    setShowSearchModal(true);
  }, []);

  // props로 내려줄 모달 닫기 버튼에 대한 함수
  const onCloseModal = useCallback(() => {
    setShowSearchModal(false);
    setFetchedData([]);
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
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
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
