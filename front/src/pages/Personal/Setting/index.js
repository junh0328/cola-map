import {
  PersonalWrapper,
  PersonalContentBox,
  PersonalLinkBox,
  UserInfoWrapper,
  UserInfoWrapperMain,
  UserInfoWrapperSub,
  UserInfoWrapperSubBtn,
} from './style';
import { useCallback, useMemo, useState } from 'react';
import {
  AlertOutlined,
  FileTextOutlined,
  HighlightOutlined,
  LeftOutlined,
  TeamOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Setting = () => {
  const style = useMemo(() => ({ cursor: 'pointer', position: 'absolute', left: '3%' }), []);
  const [nickname, setNickname] = useState('홍길동');

  const UpdateNickname = useCallback(() => {
    const result = window.prompt('변경할 닉네임을 입력해주세요\n한글로만 사용이 가능합니다');
    if (result.trim() !== '') {
      alert(`${result}로 닉네임이 변경되었습니다.`);
    } else {
      alert('올바른 닉네임을 입력해주세요');
      return;
    }
    setNickname(result);
  }, []);

  return (
    <PersonalWrapper>
      <UserInfoWrapper>
        <UserInfoWrapperMain>
          <span title="UserName">설정</span>
          <LeftOutlined style={style} title="뒤로가기" onClick={() => history.go(-1)} />
        </UserInfoWrapperMain>
        <UserInfoWrapperSub onClick={UpdateNickname}>
          <span>{nickname}</span>
          <UserInfoWrapperSubBtn>
            <HighlightOutlined />
            <div>닉네임 수정</div>
          </UserInfoWrapperSubBtn>
        </UserInfoWrapperSub>
      </UserInfoWrapper>
      <PersonalContentBox>
        <PersonalLinkBox>
          <Link to="/qna">
            <AlertOutlined style={{ marginRight: 10 }} />
            <span>자주 묻는 질문</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/question">
            <FileTextOutlined style={{ marginRight: 10 }} />
            <span>문의하기</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <Link to="/quit">
            <UserDeleteOutlined style={{ marginRight: 10 }} />
            <span>탈퇴하기</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <a href="https://doong-ji.github.io/" target="_blank">
            <TeamOutlined style={{ marginRight: 10 }} />
            <span>만든 사람들</span>
          </a>
        </PersonalLinkBox>
      </PersonalContentBox>
    </PersonalWrapper>
  );
};

export default Setting;
