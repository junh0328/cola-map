// 메인 창에 뜨는 검색창 (input)

import React, { useCallback, useEffect, useState } from 'react';
import { SearchForm, SearchInputWrapper } from './style';
import { DownOutlined } from '@ant-design/icons';
import SearchModal from 'components/SearchModal';
import { getSearchData } from 'apis/useGetSearchData';
import { useSelector } from 'react-redux';

const SearchInput = () => {
  // 모달 상태 관리
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [fetchedData, setFetchedData] = useState([]);

  const { searchAddress } = useSelector((state) => state.map);

  const onChangeValue = useCallback((e) => {
    setSearchValue(e.target.value);
    if (e.target.value !== '') {
      (async () => {
        await getSearchData(e.target.value).then((result) => {
          setFetchedData(result);
        });
      })();
    }
  }, []);

  // 검색 모달 켜기
  const onClickSearchModal = useCallback(() => {
    setShowSearchModal(true);
    setSearchValue('');
  }, []);

  // props로 내려줄 모달 닫기 버튼에 대한 함수
  const onCloseModal = useCallback(() => {
    setShowSearchModal((prev) => !prev);
    setFetchedData([]);
  }, []);

  return (
    <>
      <SearchInputWrapper>
        <SearchForm onClick={onClickSearchModal}>
          {/* 후에 현재 위치를 받아와 location을 표시 */}
          {searchAddress?.place_name ? (
            <span style={{ marginBottom: '0 !important' }}>
              <b>'{searchAddress.place_name}'</b> 에 대한 검색 결과입니다
            </span>
          ) : (
            <span style={{ marginBottom: '0 !important' }}>구, 동, 건물명, 역 등으로 검색</span>
          )}
          <DownOutlined />
        </SearchForm>
      </SearchInputWrapper>
      <SearchModal
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
        searchValue={searchValue}
        onChangeValue={onChangeValue}
        show={showSearchModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default SearchInput;
