import { css } from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  body {
    background-color: #eee;
  }

  body,
  #Map {
    width: 100vw;
    height: '95vh';
    margin: 0 auto;
    max-width: 840px;
  }

  /* 스크롤 설정 (크롬) */
  *::-webkit-scrollbar {
    // 스크롤바
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    // 스크롤바 바탕
    background-color: #eee;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    // 스크롤바 막대기
    background-color: #bbb;
    border-radius: 10px;
  }
`;

export default reset;
