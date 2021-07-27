import { LeftOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  RemoveRequestButton2,
  StoreContent,
  StoreContentCategory,
  StoreContentCategoryHeader,
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
import { Skeleton } from 'antd';
import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';
import StoreModal from 'components/StoreModal';
import LoginModal from 'components/LoginModal';
import { LOAD_INFO_REQUEST, LOG_OUT_REQUEST } from 'reducers/personal';
import { calCategory } from 'hooks/calCategory';
import { GET_STORE_REQUEST, POST_STORE_REQUEST } from 'reducers/post';

const Store = () => {
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false);
  // 카테고리 관리
  const [inputStatus, setInputStatus] = useState('');
  // 카테고리 비율
  const [categoryRate, setCategoryRate] = useState(100);
  // 삭제 요청 모달
  const [onModal, setOnModal] = useState(false);
  // 좌표값 저장
  const [addressX, setAddressX] = useState(null);
  const [addressY, setAddressY] = useState(null);

  // 서버로 부터 전달 받는 state 내 정보
  const { myInfo } = useSelector((state) => state.personal);
  // 서버로 부터 전달 받은 storeData 배열
  const { storeData } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { title, id } = useParams();
  const history = useHistory();
  const commentRef = useRef();

  // 로컬 스토리지에 토큰이 존재하는지 확인
  const myToken = localStorage.getItem('token');

  // 로컬 스토리지에 토큰이 있는데, 내 정보가 reducer에 없을 경우 유저 정보를 요청
  useEffect(() => {
    if (!myInfo && myToken) {
      console.log('me가 없으므로, 유저 정보를 요청합니다');
      dispatch({
        type: LOAD_INFO_REQUEST,
      });
    }
  }, []);

  useEffect(() => {
    dispatch(getLocation());
    useKeyword(title);
    getStoreLocation(title);
  }, []);

  /* 카테고리 비율을 계산할 함수 calCategory() 실행 후 결과 값을 CategoryRate state에 담고 props로 전달 */
  useEffect(() => {
    if (storeData.length) {
      const categoryResult = calCategory(storeData);
      setCategoryRate(categoryResult);
    }
  }, [storeData]);

  useEffect(() => {
    if (!storeData.length) {
      dispatch({
        type: GET_STORE_REQUEST,
        data: id,
      });
    }
  }, []);

  useEffect(() => {
    if (storeData.length) console.log('check storeData: ', storeData);
  }, [storeData]);

  /* useParams()로 넘겨 받는 title을 통해 좌표 다시 받아오기 */
  const getStoreLocation = (title) => {
    let places = new kakao.maps.services.Places();

    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        /* result[0] result의 첫 번째 x,y 좌표값을 가져오기 위해 확인 */
        // console.log('result[0]번째 출력:', result[0]);
        setAddressX(result[0].x);
        setAddressY(result[0].y);
      }
    };

    places.keywordSearch(title, callback);
  };

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
      dispatch({
        type: POST_STORE_REQUEST,
        data: {
          storeName: title,
          kakaoId: id,
          addressX: addressX,
          addressY: addressY,
          drink: inputStatus,
          comment: comment.value,
        },
      });
      comment.value = '';
    },
    [inputStatus],
  );

  /* 카카오 로그아웃 */
  const logoutWithKakao = useCallback(() => {
    const result = window.confirm(
      '로그아웃 시에 Cola? Gola!의 주요 기능을 사용하실 수 없습니다. \n정말로 로그아웃 하시겠습니까? 🤷🏻‍♂️',
    );
    if (result) {
      dispatch({
        type: LOG_OUT_REQUEST,
      });
    } else {
      return;
    }
  }, []);

  const onClickLogin = useCallback(() => {
    setLoginModal((prev) => !prev);
  }, []);

  const onClickModal = useCallback(() => {
    setOnModal((prev) => !prev);
  }, []);

  const onCloseModal = useCallback(() => {
    setOnModal(false);
    setLoginModal(false);
  });

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, [inputStatus]);

  return (
    <>
      <div>
        <CategoryHeader>
          <CloseModalButton onClick={goToCategories}>
            <LeftOutlined />
          </CloseModalButton>
          <span>{title}</span>
          {myInfo && <RemoveRequestButton2 onClick={logoutWithKakao}>로그아웃</RemoveRequestButton2>}
          {myInfo ? (
            <RemoveRequestButton onClick={onClickModal}>삭제요청</RemoveRequestButton>
          ) : (
            <RemoveRequestButton onClick={onClickLogin}>로그인</RemoveRequestButton>
          )}
        </CategoryHeader>
        <StoreMain>
          <StoreMap id="Map" />
          {/* 가게 정보 관련 */}
          <StoreContent>
            <StoreContentHeader>
              <StoreContentHeaderMain>가게 정보</StoreContentHeaderMain>
            </StoreContentHeader>
            <StoreContentMain>
              <StoreContentCategory>
                <StoreContentCategoryHeader>
                  <span>{title}</span>의 최애 음료수는?
                </StoreContentCategoryHeader>
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
                {myInfo && (
                  <>
                    <MyCard title={myInfo.myNickname} style={{ margin: '6% 0' }}>
                      <input
                        ref={commentRef}
                        style={{ padding: 10, width: '100%', border: 'none', outline: 'none' }}
                        placeholder="리뷰를 입력해주세요!"
                      />
                    </MyCard>
                    <CustomBtn>리뷰쓰기</CustomBtn>
                  </>
                )}
              </div>
            </form>
          </StoreContent>
          {/* 리뷰 리스트 관련 */}
          <StoreContent>
            <StoreContentHeader>
              <StoreContentHeaderMain>{storeData.length ? `리뷰` : `아직까지 작성된 리뷰`}</StoreContentHeaderMain>
              <StoreContentHeaderSub>
                {storeData?.length ? <span>&nbsp;{storeData.length}개</span> : <span>가 없어요</span>}
              </StoreContentHeaderSub>
            </StoreContentHeader>
            {storeData?.length ? (
              <StoreContentReview>
                {storeData?.map((data) => (
                  <StoreContentReviewWrap key={data._id}>
                    <MyCard title={data.user.profileNickname} bordered={false} category={data.drink.toString()}>
                      <p>{data.comment}</p>
                      <p>{data.drink === 'pepsi' ? <img src={pepsi} /> : <img src={coca} />}</p>
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
      {loginModal && <LoginModal onClose={onCloseModal} />}
      {onModal && <StoreModal title={title} id={id} onClose={onCloseModal} />}
    </>
  );
};

export default Store;
