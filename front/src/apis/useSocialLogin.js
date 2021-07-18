export const SocialLogin = () => {
  Kakao.init(`${process.env.REACT_APP_KAKAO_KEY}`);
  // console.log('initialized: ', Kakao.isInitialized());

  Kakao.Auth.login({
    scope: 'profile_nickname, profile_image, account_email',

    success: function (authObj) {
      console.log('authObj: ', authObj);
      // console.log('authObj.scope', authObj.scope);
      fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          Authorization: authObj.access_token,
        },
      })
        .then((res) => res.json())
        // res 안에 scope로 만들어준 profile_nickname과 account_email이 넘어오지 않는 상황
        // 서버에서 token만 받는 걸로 되어 있어서 그런지는 모르겠음
        .then((res) => {
          console.log('res: ', res);
          localStorage.setItem('token', res.token);
          if (res.token) {
            alert('로그인 성공!');
          } else {
            alert('다시 확인해주세요');
          }
        });

      // 카카오 서버에서 성공시 console 창에 해당 데이터 출력
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
        },
        fail: function (err) {
          console.log('에러', err);
          return;
        },
      });
    },
    fail: function (err) {
      console.log('에러', err);
      alert('로그인실패!');
      return;
    },
  });
};

/*
카카오 개발자 사이트에 들어가면 설명이 쭉 나오므로 그대로 따라해도 무방하다.

Kakao.init(내 자바스크립트 키 위치)로 내 키를 인식시켜주고
Kakao.Auth.login으로 내가 받아오려는 정보들을 받아오고 fetch 함수로 백엔드에 카카오에서 받은 access_token을 넘겨준다.
그리고 백엔드에서 보내준 다른 access_token을 localStoragedp 저장하면 메인페이지로 넘어가는 동시에 로그인 성공이라는 alert가 뜬다.

로그아웃 기능은 간단하게 localStorage에 넣어둔 access_token을 없애면 끝!
*/
