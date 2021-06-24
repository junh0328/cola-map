import { Link } from 'react-router-dom';
import { PersonalWrapper, PersonalContentBox, PersonalLinkBox, CardWrap, PersonalContentBoxWrap } from './style';
import UserInfoBar from 'components/UserInfoBar';
import { useState } from 'react';
import { Skeleton, Card } from 'antd';

const Personal = () => {
  const [userInfo, setUserInfo] = useState(false);

  return (
    <PersonalWrapper>
      <UserInfoBar />
      <PersonalContentBox>
        <PersonalContentBoxWrap>
          <PersonalLinkBox>
            <Link to="/myapply">
              {userInfo ? <div>내가 제보한 가게</div> : <span>제보한 가게가 없어요</span>}
              <button>전체보기</button>
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
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
            </CardWrap>
          )}
        </PersonalContentBoxWrap>
        <PersonalContentBoxWrap>
          <PersonalLinkBox>
            <Link to="/myreview">
              {userInfo ? <div>내가 쓴 리뷰</div> : <span>내가 쓴 리뷰가 없어요.</span>}
              <button>전체보기</button>
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
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
              <Card title="의왕내손 메가커피" style={{ height: '15vh', margin: 10 }}>
                <p>펩시 절대 안팔쥬</p>
              </Card>
            </CardWrap>
          )}
        </PersonalContentBoxWrap>
      </PersonalContentBox>
    </PersonalWrapper>
  );
};

export default Personal;
