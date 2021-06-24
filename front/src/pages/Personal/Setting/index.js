import { PersonalWrapper, PersonalContentBox, PersonalLinkBox, UserInfoWrapper, UserInfoWrapperMain } from './style';
import { useMemo } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Setting = () => {
  const style = useMemo(() => ({ cursor: 'pointer', position: 'absolute', right: '3%' }), []);

  return (
    <PersonalWrapper>
      <UserInfoWrapper>
        <UserInfoWrapperMain>
          <span title="UserName">홍길동</span>
          <LeftOutlined style={style} title="뒤로가기" onClick={() => history.go(-1)} />
        </UserInfoWrapperMain>
      </UserInfoWrapper>
      <PersonalContentBox>
        <PersonalLinkBox>
          <Link to="/qna">
            <span>자주 묻는 질문</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/question">
            <span>문의하기</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/quit">
            <span>탈퇴하기</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <a href="https://doong-ji.github.io/" target="_blank">
            <span>만든 사람들</span>
          </a>
        </PersonalLinkBox>
      </PersonalContentBox>
    </PersonalWrapper>
  );
};

export default Setting;
