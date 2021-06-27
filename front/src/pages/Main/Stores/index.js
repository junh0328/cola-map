import { LeftOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getLocation } from 'reducers/map';
import {
  CategoryHeader,
  CloseModalButton,
  MyCard,
  RemoveRequestButton,
  StoreContent,
  StoreContentCategory,
  StoreContentCategoryHeader,
  StoreContentCategoryMain,
  StoreContentHeader,
  StoreContentHeaderMain,
  StoreContentHeaderSub,
  StoreContentMain,
  StoreContentReview,
  StoreContentReviewWrap,
  StoreMain,
  StoreMap,
} from './style';
import { useKeyword } from 'apis/useKeyword';
import { Card, Skeleton } from 'antd';

const Store = () => {
  /*
  서버에 요청을 통해 가게에 대한 정보를 담은 storeInfo
  후에 이 페이지에서 직접 useKeyword 요청을 보내는 것이 아닌 dispatch를 통해 서버에 저장되어 있는 store 정보가 있을 경우 state를 변경한다
  해당 가게에 대한 값(정보)이 있을 경우에는 삭제 요청을 보여지도록 하고, 없을 경우에는 제보요청이 보여지도록 조건문을 준다
  */

  const [storeReview, setStoreReview] = useState([1]);
  const [storeInfo, setStoreInfo] = useState(true);
  const { title } = useParams();
  const history = useHistory();

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
              <StoreContentCategoryMain>1개</StoreContentCategoryMain>
            </StoreContentCategory>
            <StoreContentCategory>
              <StoreContentCategoryHeader>포테킹 후라이드</StoreContentCategoryHeader>
              <StoreContentCategoryMain>펩시 1.25L로 변경</StoreContentCategoryMain>
            </StoreContentCategory>
          </StoreContentMain>
        </StoreContent>
        <StoreContent>
          <StoreContentHeader>
            <StoreContentHeaderMain>리뷰 </StoreContentHeaderMain>

            <StoreContentHeaderSub>{storeReview.length ? <span>3개</span> : <span>0개</span>}</StoreContentHeaderSub>
            {storeReview.length ? (
              <button style={{ right: '17%' }} onClick={() => onClickEvent()}>
                더보기
              </button>
            ) : null}
            <button onClick={() => onClickEvent()}>리뷰쓰기</button>
          </StoreContentHeader>
          {storeReview.length ? (
            <StoreContentReview>
              <StoreContentReviewWrap>
                <MyCard title="윤성님" bordered={false}>
                  <p>존맛탱 가게입니다 추천해요</p>
                </MyCard>
              </StoreContentReviewWrap>
              <StoreContentReviewWrap>
                <MyCard title="도해님" bordered={false}>
                  <p>튀김이 바삭바삭해용</p>
                </MyCard>
              </StoreContentReviewWrap>
              <StoreContentReviewWrap>
                <MyCard title="진수님" bordered={false}>
                  <p>여긴 왜 제로콜라 없나요?</p>
                </MyCard>
              </StoreContentReviewWrap>
            </StoreContentReview>
          ) : (
            <Skeleton></Skeleton>
          )}
        </StoreContent>
      </StoreMain>
    </div>
  );
};

export default Store;
