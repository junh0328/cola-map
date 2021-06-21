import { LeftOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLocation, setAddress } from 'reducers/map';
import {
  CategoryHeader,
  CloseModalButton,
  RemoveRequestButton,
  StoreContent,
  StoreContentCategory,
  StoreContentCategoryHeader,
  StoreContentCategoryMain,
  StoreContentHeader,
  StoreContentHeaderMain,
  StoreContentHeaderSub,
  StoreContentMain,
  StoreMain,
  StoreMap,
} from './style';
import { useKeyword } from 'apis/useKeyword';

const Store = () => {
  /*
  서버에 요청을 통해 가게에 대한 정보를 담은 storeInfo
  후에 이 페이지에서 직접 useKeyword 요청을 보내는 것이 아닌 dispatch를 통해 서버에 저장되어 있는 store 정보가 있을 경우 state를 변경한다
  해당 가게에 대한 값(정보)이 있을 경우에는 삭제 요청을 보여지도록 하고, 없을 경우에는 제보요청이 보여지도록 조건문을 준다
  */
  const [storeInfo, setStoreInfo] = useState(false);
  const { title } = useParams();

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    useKeyword(title);
  }, []);

  const onClickEvent = useCallback(() => {
    alert('clicked!');
  }, []);

  return (
    <div>
      <CategoryHeader>
        <CloseModalButton onClick={goToCategories}>
          <LeftOutlined />
        </CloseModalButton>
        <span>{title}</span>
        {storeInfo ? (
          <RemoveRequestButton onClick={() => alert('삭제요청을 보내시겠습니까?')}>삭제요청</RemoveRequestButton>
        ) : (
          <RemoveRequestButton onClick={() => alert('해당 페이지에 대해 제보하시겠습니까?')}>
            제보요청
          </RemoveRequestButton>
        )}
      </CategoryHeader>
      <StoreMain>
        <StoreMap id="Map" />
        <StoreContent>
          <StoreContentHeader>
            <StoreContentHeaderMain>가게 정보</StoreContentHeaderMain>
            <button onClick={() => onClickEvent()}>정보수정</button>
          </StoreContentHeader>
          <StoreContentMain>
            <StoreContentCategory>
              <StoreContentCategoryHeader>음료 정보</StoreContentCategoryHeader>
              <StoreContentCategoryMain>펩시</StoreContentCategoryMain>
            </StoreContentCategory>
            <StoreContentCategory>
              <StoreContentCategoryHeader>전화번호</StoreContentCategoryHeader>
              <StoreContentCategoryMain>070-5252-8282</StoreContentCategoryMain>
            </StoreContentCategory>
          </StoreContentMain>
        </StoreContent>
        <StoreContent>
          <StoreContentMain>
            <StoreContentCategory>
              <StoreContentCategoryHeader>카테고리 및 메뉴</StoreContentCategoryHeader>
              <StoreContentCategoryMain>0개</StoreContentCategoryMain>
            </StoreContentCategory>
            <StoreContentCategory>
              <StoreContentCategoryHeader>문어빵</StoreContentCategoryHeader>
              <StoreContentCategoryMain>상세 메뉴 없음</StoreContentCategoryMain>
            </StoreContentCategory>
          </StoreContentMain>
        </StoreContent>
        <StoreContent>
          <StoreContentHeader>
            <StoreContentHeaderMain>리뷰 </StoreContentHeaderMain>
            <StoreContentHeaderSub>0개</StoreContentHeaderSub>
            <button onClick={() => onClickEvent()}>리뷰쓰기</button>
          </StoreContentHeader>
        </StoreContent>
      </StoreMain>
    </div>
  );
};

export default Store;
