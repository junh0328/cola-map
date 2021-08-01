import {
  PersonalWrapper,
  PersonalContentBox,
  PersonalLinkBox,
  PersonalContentBoxWrap,
  NonCardWrap,
  SelectWrap,
} from './style';
import UserInfoBar from 'components/UserInfoBar';
import { useCallback, useEffect, useState } from 'react';
import { Skeleton, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from 'components/LoginModal';
import { LOAD_INFO_REQUEST, LOAD_MY_POSTS_REQUEST } from 'reducers/personal';
import CardList from 'components/CardList';
import MenuList from 'components/MenuList';
import { AppstoreFilled, UnorderedListOutlined } from '@ant-design/icons';

const Personal = () => {
  // 로그인 모달
  const [loginModal, setLoginModal] = useState(false);
  const [canLoad, setCanLoad] = useState(false);
  const [listMenu, setListMenu] = useState('list');

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

  useEffect(() => {
    if (myToken && myInfo && !myPosts.length) {
      setCanLoad(true);
    }
  }, [myToken, myInfo, myPosts.length]);

  useEffect(() => {
    if (canLoad) {
      console.log('myInfo', myInfo);
      dispatch({
        type: LOAD_MY_POSTS_REQUEST,
      });
    } else return;
  }, [canLoad]);

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
                    {myPosts.length < 10 ? (
                      <>
                        내가 제보한 가게 <span>아직 {myPosts.length}개</span>
                      </>
                    ) : (
                      <>
                        내가 제보한 가게 <span>무려 {myPosts.length}개</span>
                      </>
                    )}
                  </div>
                  {/* <Switch style={{ background: 'gray' }} onChange={() => setListMenu((prev) => !prev)} /> */}
                  <SelectWrap>
                    <AppstoreFilled onClick={() => setListMenu('card')} />
                    <UnorderedListOutlined onClick={() => setListMenu('list')} />
                  </SelectWrap>
                </>
              ) : (
                <span>제보한 가게가 없어요</span>
              )}
            </PersonalLinkBox>
            {!(myInfo && myPosts) ? (
              <NonCardWrap>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
                <Card style={{ margin: 5 }}>
                  <Skeleton active />
                </Card>
              </NonCardWrap>
            ) : (
              // 1.목록형 2.나열형(카드)
              <>{listMenu === 'list' ? <MenuList myPosts={myPosts} /> : <CardList myPosts={myPosts} />}</>
            )}
          </PersonalContentBoxWrap>
        </PersonalContentBox>
      </PersonalWrapper>
      {loginModal && <LoginModal onClose={onCloseModal} />}
    </>
  );
};

export default Personal;
