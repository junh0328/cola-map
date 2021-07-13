import { CloseOutlined } from '@ant-design/icons';
import { SocialLogin } from 'apis/useSocialLogin';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
  const onClose = props.onClose;

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

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    alert('로그인!');
    onClose();
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
            <button
              onClick={() => {
                SocialLogin();
                onClose();
              }}
            >
              카카오로 로그인하기
            </button>
          </FormApplyWrap>
        </LoginModalMain>
      </LoginModalWrap>
    </LoginModalBackground>
  );
};

export default LoginModal;
