import { LeftOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getLocation } from 'reducers/map';
import {
  CategoryHeader,
  CloseModalButton,
  CustomBtn,
  FormCategoryMain,
  FormCategoryWrap,
  InnerGraph,
  MyCard,
  MyGraph,
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
import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';

const Store = () => {
  /*
  서버에 요청을 통해 가게에 대한 정보를 담은 storeInfo
  후에 이 페이지에서 직접 useKeyword 요청을 보내는 것이 아닌 dispatch를 통해 서버에 저장되어 있는 store 정보가 있을 경우 state를 변경한다
  해당 가게에 대한 값(정보)이 있을 경우에는 삭제 요청을 보여지도록 하고, 없을 경우에는 제보요청이 보여지도록 조건문을 준다
  */

  // 리뷰 갯수 표현 state
  const [storeReview, setStoreReview] = useState([1]);
  // 가게 정보 요청 (삭제요청/ 제보요청)
  const [storeInfo, setStoreInfo] = useState(true);
  // 카테고리 관리
  const [inputStatus, setInputStatus] = useState('');
  // 카테고리 비율
  const [categoryRate, setCategoryRate] = useState(100);

  // 해당 가게에 대한 리뷰 리스트
  const reviewList = [
    {
      id: 1,
      storeName: '헤반트 범계점',
      userName: '윤성님',
      comment: '존맛탱 가게입니다 추천해요',
      category: '펩시',
    },
    {
      id: 2,
      storeName: '헤반트 범계점',
      userName: '도해님',
      comment: '튀김이 바삭바삭해용.튀김이 바삭바삭해용',
      category: '코카콜라',
    },
    {
      id: 3,
      storeName: '헤반트 범계점',
      userName: '진수님',
      comment: '여긴 왜 제로콜라 없나요?',
      category: '펩시',
    },
    {
      id: 4,
      storeName: '헤반트 범계점',
      userName: '준희님',
      comment: '펩시 제로 라임맛 최고',
      category: '펩시',
    },
  ];

  const { title, id } = useParams();
  const history = useHistory();
  const commentRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    useKeyword(title);
  }, []);

  // 카테고리 비율을 계산할 함수 calCategory() 실행 후 결과 값을 CategoryRate state에 담고 props로 전달
  useEffect(() => {
    const categoryResult = calCategory(reviewList);
    // console.log(categoryResult);
    setCategoryRate(categoryResult);
  }, [reviewList]);

  const calCategory = useCallback((reviewList) => {
    // 펩시 개수, 콜라 개수
    let pepsiArr = [];
    let cocaArr = [];
    let result;

    reviewList.map((r) => {
      // console.log(r.id, r.category);
      if (r.category === '펩시') {
        pepsiArr.push(r.category);
      } else if (r.category === '코카콜라') {
        cocaArr.push(r.category);
      }
    });

    // console.log('pepsiArr :', pepsiArr, pepsiArr.length);
    // console.log('cocaArr :', cocaArr, cocaArr.length);
    // console.log('result: ', result);
    return (result = Math.floor((pepsiArr.length / reviewList.length) * 100));
  }, []);

  const handleClickRadioButton = useCallback((radioBtnName) => {
    setInputStatus(radioBtnName);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const comment = commentRef.current;
      if (comment.value.trim() === '' || inputStatus === '') {
        alert('게시글을 입력 또는 카테고리 선택을 완료해야 합니다');
        comment.focus();
        return;
      }
      alert(
        `가게id: ${id} \n가게이름: ${title}\n커멘트: ${comment.value}\n카테고리: ${inputStatus ? inputStatus : '없음'}`,
      );
      comment.value = '';
    },
    [inputStatus],
  );

  const onClickEvent = useCallback(() => {
    alert('clicked!');
  }, []);

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, [inputStatus]);

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
        {/* 가게 정보 관련 */}
        <StoreContent>
          <StoreContentHeader>
            <StoreContentHeaderMain>가게 정보</StoreContentHeaderMain>
            <CustomBtn onClick={() => onClickEvent()}>정보수정</CustomBtn>
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
        {/* 리뷰 작성하기 관련 */}
        <StoreContent>
          <form onSubmit={onSubmitForm}>
            <MyGraph>
              <InnerGraph width={categoryRate} />
            </MyGraph>
            <FormCategoryWrap>
              <FormCategoryMain>
                <input
                  type="radio"
                  name="category"
                  value="pepsi"
                  defaultChecked={inputStatus === 'pepsi'}
                  onClick={() => handleClickRadioButton('pepsi')}
                />
                <img src={pepsi} />
                <span>{categoryRate}%</span>
              </FormCategoryMain>
              <FormCategoryMain>
                <span>VS</span>
              </FormCategoryMain>
              <FormCategoryMain>
                <span>{100 - categoryRate}%</span>
                <img src={coca} />
                <input
                  type="radio"
                  name="category"
                  value="coca"
                  defaultChecked={inputStatus === 'coca'}
                  onClick={() => handleClickRadioButton('coca')}
                />
              </FormCategoryMain>
            </FormCategoryWrap>
            <div>
              <MyCard title="홍길동" style={{ margin: '6% 0' }}>
                <input ref={commentRef} style={{ padding: 10, width: '100%', border: 'none', outline: 'none' }} />
              </MyCard>
              <CustomBtn>리뷰쓰기</CustomBtn>
            </div>
          </form>
        </StoreContent>
        {/* 리뷰 리스트 관련 */}
        <StoreContent>
          <StoreContentHeader>
            <StoreContentHeaderMain>리뷰 </StoreContentHeaderMain>
            <StoreContentHeaderSub>
              {reviewList.length ? <span>{reviewList.length}개</span> : <span>0개</span>}
            </StoreContentHeaderSub>
          </StoreContentHeader>
          {storeReview.length ? (
            <StoreContentReview>
              {reviewList.map((review) => (
                <StoreContentReviewWrap key={review.id}>
                  <MyCard title={review.userName} bordered={false} category={review.category.toString()}>
                    <p>{review.comment}</p>
                    <p>{review.category === '펩시' ? <img src={pepsi} /> : <img src={coca} />}</p>
                  </MyCard>
                </StoreContentReviewWrap>
              ))}
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
