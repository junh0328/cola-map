import { Link } from 'react-router-dom';
import {
  PersonalWrapper,
  PersonalContentBox,
  PersonalLinkBox,
  CardWrap,
  PersonalContentBoxWrap,
  MyCard,
} from './style';
import UserInfoBar from 'components/UserInfoBar';
import { useCallback, useEffect, useState } from 'react';
import { Skeleton, Card } from 'antd';
import { useSelector } from 'react-redux';
import LoginModal from 'components/LoginModal';

const Personal = () => {
  const [userInfo, setUserInfo] = useState(true);
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false);
  // 성공시 생기는 토큰 관리
  const [ktoken, setKtoken] = useState(null);
  // const localToken = localStorage.getItem('token');

  // const { me } = useSelector((state) => state.personal);

  const requireAlert = useCallback(() => {
    alert('회원 정보가 없습니다. 로그인 모달을 띄웁니다.');
  }, []);

  // useEffect(() => {
  // console.log('local Storage token 감지 : ', ktoken);
  // if (!ktoken) {
  //   if (localToken) {
  //     setKtoken(localToken);
  //     return;
  //   }
  // }
  //   if (!ktoken) {
  //     requireAlert();
  //     setLoginModal(true);
  //   }
  // }, [ktoken]);

  const onCloseModal = useCallback(() => {
    setLoginModal(false);
  }, []);

  return (
    <>
      <PersonalWrapper>
        <UserInfoBar />
        <PersonalContentBox>
          <PersonalContentBoxWrap>
            <PersonalLinkBox>
              <Link to="/myapply">
                {userInfo ? (
                  <>
                    <div>내가 제보한 가게</div>
                    <button>전체보기</button>
                  </>
                ) : (
                  <span>제보한 가게가 없어요</span>
                )}
              </Link>
            </PersonalLinkBox>
            {!userInfo ? (
              <CardWrap>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
              </CardWrap>
            ) : (
              <CardWrap>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
              </CardWrap>
            )}
          </PersonalContentBoxWrap>
          <PersonalContentBoxWrap>
            <PersonalLinkBox>
              <Link to="/myreview">
                {userInfo ? (
                  <>
                    <div>내가 제보한 가게</div>
                    <button>전체보기</button>
                  </>
                ) : (
                  <span>내가 쓴 리뷰가 없어요.</span>
                )}
              </Link>
            </PersonalLinkBox>
            {!userInfo ? (
              <CardWrap>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
              </CardWrap>
            ) : (
              <CardWrap>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
                <MyCard title="의왕내손 메가커피">
                  <p>펩시 절대 안팔쥬</p>
                </MyCard>
              </CardWrap>
            )}
          </PersonalContentBoxWrap>
        </PersonalContentBox>
      </PersonalWrapper>
      {loginModal && <LoginModal onClose={onCloseModal} setKtoken={setKtoken} />}
    </>
  );
};

export default Personal;
