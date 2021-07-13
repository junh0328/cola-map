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
        // console.log('정상적으로 로그인 되었습니다.', authObj);

        setKtoken(authObj);
        onClose();
        // 카카오 서버에서 성공시 console 창에 해당 데이터 출력
        // window.Kakao.API.request({
        //   url: '/v2/user/me',
        //   success: (res) => {
        //     const kakao_account = res.kakao_account;
        //     console.log('kakao_account:', kakao_account);
        //   },
        //   fail: function (err) {
        //     console.log('에러', err);
        //     return;
        //   },
        // });
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
