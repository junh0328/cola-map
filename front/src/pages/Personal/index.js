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
import { useState } from 'react';
import { Skeleton, Card } from 'antd';

const Personal = () => {
  const [userInfo, setUserInfo] = useState(true);

  return (
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
  );
};

export default Personal;
