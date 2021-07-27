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
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from 'components/LoginModal';
import { LOAD_INFO_REQUEST, LOAD_MY_POSTS_REQUEST } from 'reducers/personal';

const Personal = () => {
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false);

  const myToken = localStorage.getItem('token');

  const { myInfo, myPosts } = useSelector((state) => state.personal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myInfo && myToken) {
      console.log('me가 없으므로, 유저 정보를 요청합니다');
      dispatch({
        type: LOAD_INFO_REQUEST,
      });
    } else return;
  }, []);

  // myPosts가 빈배열인데, 유저 정보는 있어야 돼
  // 근데 유저 정보는 처음에 비어있다가 나중에 들어와
  useEffect(() => {
    // LS에 Token은 있는데 storeData가 없으면 (로그인 정보가 있는데 storeData가 없으면) > dispatch
    if (myInfo && !myPosts.length) {
      console.log('LOAD_MY_POSTS_REQUEST_ start!');
      dispatch({
        // 내가 제보한 포스트 불러오기
        type: LOAD_MY_POSTS_REQUEST,
      });
    } else return;
  }, [myInfo, myPosts]);

  const onCloseModal = useCallback(() => {
    setLoginModal(false);
  }, []);

  return (
    <>
      <PersonalWrapper>
        <UserInfoBar myInfo={myInfo} setLoginModal={setLoginModal} />
        <PersonalContentBox>
          <PersonalContentBoxWrap>
            <PersonalLinkBox>
              {myPosts.length ? (
                <>
                  <div style={{ fontWeight: 'bold' }}>
                    내가 제보한 가게 <span>무려 {myPosts.length}개</span>
                  </div>
                </>
              ) : (
                <span>제보한 가게가 없어요</span>
              )}
            </PersonalLinkBox>
            {!(myInfo && myPosts) ? (
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
                {myPosts.map((post) => (
                  <div
                    style={{ cursor: 'pointer' }}
                    key={post._id}
                    onClick={() => (location.href = `store/${post.store.storeName}/${post.store.kakaoId}`)}
                  >
                    <MyCard title={post.store.storeName}>
                      <p>{post.comment}</p>
                    </MyCard>
                  </div>
                ))}
              </CardWrap>
            )}
          </PersonalContentBoxWrap>
        </PersonalContentBox>
      </PersonalWrapper>
      {loginModal && <LoginModal onClose={onCloseModal} />}
    </>
  );
};

export default Personal;
