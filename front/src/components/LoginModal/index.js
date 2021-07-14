import { CloseOutlined } from '@ant-design/icons';

import React, { useCallback, useMemo } from 'react';
import {
  FormApplyWrap,
  LoginModalBackground,
  LoginModalHeader,
  LoginModalHeaderBtn,
  LoginModalHeaderMain,
  LoginModalMain,
  LoginModalWrap,
} from './style';

const LoginModal = (props) => {
  const { onClose, setKtoken } = props;

  const BtnStyle = useMemo(
    () => ({
      cursor: 'pointer',
      fontSize: '1rem',
      padding: '5px',
      borderRadius: '50%',
      border: '1px solid gray',
    }),
    [],
  );

  const socialLogin = useCallback(() => {
    Kakao.init(`${process.env.REACT_APP_KAKAO_KEY}`);

    Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, account_email',

      success: function (authObj) {
        console.log('authObj: ', authObj);
        // token이라는 이름으로 authObj.access_token (access token)을 생성 및 로컬 스토리지에서 저장
        localStorage.setItem('token', authObj.access_token);
        if (authObj.access_token) {
          setKtoken(authObj.access_token);
          onClose();
          Kakao.cleanup();
          console.log('Kakao.cleanup!');
        }
      },
      fail: function (err) {
        console.log('에러', err);
        alert('로그인실패!');
        return;
      },
    });
  }, []);

  return (
    <LoginModalBackground>
      <LoginModalWrap>
        <LoginModalMain>
          <LoginModalHeader>
            <LoginModalHeaderBtn>
              <CloseOutlined style={BtnStyle} onClick={() => onClose()} />
            </LoginModalHeaderBtn>
            <LoginModalHeaderMain>소셜 계정으로 로그인하기</LoginModalHeaderMain>
          </LoginModalHeader>
          <FormApplyWrap>
            <button onClick={socialLogin}>카카오로 로그인하기</button>
          </FormApplyWrap>
        </LoginModalMain>
      </LoginModalWrap>
    </LoginModalBackground>
  );
};

export default LoginModal;
