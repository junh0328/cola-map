import { CloseOutlined } from '@ant-design/icons';
import axios from 'axios';

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
  const { onClose } = props;

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
    location.href = `http://localhost:5000/user/kakao/login`;
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
