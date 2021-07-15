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
import { LOGIN_REQUEST } from 'reducers/personal';
import { calCategory } from 'hooks/calCategory';
import { reviewList } from 'apis/dummy/reviewList';

const Store = () => {
  // 리뷰 갯수 표현 state
  const [storeReview, setStoreReview] = useState([1]);
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false);
  // 카테고리 관리
  const [inputStatus, setInputStatus] = useState('');
  // 카테고리 비율
  const [categoryRate, setCategoryRate] = useState(100);
  // 삭제 요청 모달
  const [onModal, setOnModal] = useState(false);
  // 성공시 생기는 토큰 관리
  const [ktoken, setKtoken] = useState(null);

  // 서버로 부터 전달 받는 state 내 정보
  const { me } = useSelector((state) => state.personal);
  const dispatch = useDispatch();
  const { title, id } = useParams();
  const history = useHistory();
  const commentRef = useRef();

  // const localToken = localStorage.getItem('token');

  useEffect(() => {
    // console.log('local Storage token 감지 : ', ktoken);
    // 카카오 로그인을 통해 로그인을 한 상황이 아닌, 로컬 스토리지의 토큰을 활용할 때
    // if (!ktoken) {
    //   if (localToken) {
    //     setKtoken(localToken);
    //   }
    // }

    // 로그인 성공시, LoginModal에서 setKtoken으로 관리하는 token이 담는다.
    // 후에 이 토큰을 서버로 전달한다.
    if (ktoken) {
      dispatch({
        type: LOGIN_REQUEST,
        data: {
          uniqId: ktoken,
          nickname: '준희',
        },
      });
    }
  }, [ktoken]);

  useEffect(() => {
    dispatch(getLocation());
    useKeyword(title);
  }, []);

  // 카테고리 비율을 계산할 함수 calCategory() 실행 후 결과 값을 CategoryRate state에 담고 props로 전달
  useEffect(() => {
    const categoryResult = calCategory(reviewList);
    setCategoryRate(categoryResult);
  }, [reviewList]);

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

  // 카카오 로그아웃
  const logoutWithKakao = async () => {
    Kakao.init(`${process.env.REACT_APP_KAKAO_KEY}`);
    if (!Kakao.Auth.getAccessToken()) {
      alert('Not logged in.');
      return;
    }
    // 토큰이 2개입니다. 하나는 로컬 스토리지에 저장된 access_token > token
    // 카카오 api를 통해 생성한 결과물(access_token)를 담은 토큰  > ktoken
    // localStorage.removeItem('token');
    await Kakao.Auth.logout(function () {
      console.log('로그아웃 성공', Kakao.Auth.getAccessToken());
    });
    // setKtoken(null); // state 관리를 위해 존재, setKtoken(null)을 하게되면 logout이 안먹음
    // Kakao.cleanup();
  };

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
          {ktoken && <RemoveRequestButton2 onClick={logoutWithKakao}>로그아웃</RemoveRequestButton2>}
          {ktoken ? (
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
                <MyCard title="이준희" style={{ margin: '6% 0' }}>
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
      {loginModal && <LoginModal onClose={onCloseModal} setKtoken={setKtoken} />}
      {onModal && <StoreModal title={title} id={id} onClose={onCloseModal} />}
    </>
  );
};

export default Store;
