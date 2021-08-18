import {
  PersonalWrapper,
  PersonalContentBox,
  PersonalLinkBox,
  UserInfoWrapper,
  UserInfoWrapperMain,
  UserInfoWrapperSub,
  UserInfoWrapperSubBtn,
} from './style';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FileTextOutlined, HighlightOutlined, LeftOutlined, TeamOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NICKNAME_REQUEST, LOAD_INFO_REQUEST, LOG_OUT_REQUEST } from 'reducers/personal';

const Setting = () => {
  const style = useMemo(() => ({ cursor: 'pointer', position: 'absolute', left: '3%' }), []);

  // 로컬 스토리지에 토큰 정보가 업데이트 될 때마다 상태를 변경할 state
  const [tokenData, setTokenData] = useState(false);
  const myToken = localStorage.getItem('token');

  const { myInfo } = useSelector((state) => state.personal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myInfo && myToken) {
      console.log('me가 없으므로, 유저 정보를 요청합니다');
      dispatch({
        type: LOAD_INFO_REQUEST,
      });
    }
  }, []);

  // LOG_OUT_REQUEST 성공시 Main 페이지로 이동
  useEffect(() => {
    if (tokenData) {
      location.href = '/personal';
    }
  });

  const UpdateNickname = useCallback(() => {
    const result = window.prompt('변경할 닉네임을 입력해주세요\n한글로만 사용이 가능합니다');
    if (result && result.trim() !== '') {
      dispatch({
        type: CHANGE_NICKNAME_REQUEST,
        data: {
          profileNickname: result,
        },
      });
      setTokenData(true);
    } else {
      alert('올바른 닉네임을 입력해주세요');
      return;
    }
  }, []);

  const logoutWithKakao = useCallback(() => {
    const result = window.confirm(
      '로그아웃 시에 Cola? Gola!의 주요 기능을 사용하실 수 없습니다. \n정말로 로그아웃 하시겠습니까? 🤷🏻‍♂️',
    );
    if (result) {
      dispatch({
        type: LOG_OUT_REQUEST,
      });
      setTokenData(true);
    } else {
      return;
    }
  }, []);

  return (
    <PersonalWrapper>
      <UserInfoWrapper>
        <UserInfoWrapperMain>
          <span title="UserName">설정</span>
          <LeftOutlined style={style} title="뒤로가기" onClick={() => history.go(-1)} />
        </UserInfoWrapperMain>
        <UserInfoWrapperSub onClick={UpdateNickname}>
          {myInfo && <span title="UserName">{myInfo.myNickname}</span>}
          <UserInfoWrapperSubBtn>
            <HighlightOutlined />
            <div>닉네임 수정</div>
          </UserInfoWrapperSubBtn>
        </UserInfoWrapperSub>
      </UserInfoWrapper>
      <PersonalContentBox>
        <PersonalLinkBox>
          <Link to="/question">
            <FileTextOutlined style={{ marginRight: 10 }} />
            <span>문의하기</span>
          </Link>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <a>
            <div onClick={logoutWithKakao}>
              <UserDeleteOutlined style={{ marginRight: 10 }} />
              <span>로그아웃</span>
            </div>
          </a>
        </PersonalLinkBox>
        <PersonalLinkBox>
          <a href="https://github.com/Doong-Ji/cola-map" target="_blank">
            <TeamOutlined style={{ marginRight: 10 }} />
            <span>만든 사람들</span>
          </a>
        </PersonalLinkBox>
      </PersonalContentBox>
    </PersonalWrapper>
  );
};

export default Setting;
