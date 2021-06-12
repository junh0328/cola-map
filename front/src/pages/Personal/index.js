import { Link } from 'react-router-dom';
import { PersonalWrapper, PersonalContentBox, PersonalLinkBox } from './style';
import UserInfoBar from 'components/UserInfoBar';

const Personal = () => {
  return (
    <PersonalWrapper>
      <UserInfoBar />
      <PersonalContentBox>
        <PersonalLinkBox>
          <Link to="/myapply">
            <span>내가 제보한 가게</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/myreview">
            <span>내가 쓴 리뷰</span>
          </Link>
        </PersonalLinkBox>
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

export default Personal;
