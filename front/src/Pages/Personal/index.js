import { Link } from 'react-router-dom';
import { PersonalWrapper, PersonalContentBox, PersonalGridBox, PersonalLinkBox } from './style';
import UserInfoBar from '../../components/UserInfoBar';

const Personal = () => {
  return (
    <PersonalWrapper>
      <UserInfoBar />
      <PersonalContentBox>
        <PersonalLinkBox>
          <Link to="/personal/4">
            <span>내가 제보한 가게</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/personal/5">
            <span>내가 쓴 리뷰</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/personal/1">
            <span>자주 묻는 질문</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/personal/2">
            <span>문의사항</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/personal/3">
            <span>탈퇴하기</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/personal/32">
            <span>만든 사람들</span>
          </Link>
        </PersonalLinkBox>
      </PersonalContentBox>
    </PersonalWrapper>
  );
};

export default Personal;
