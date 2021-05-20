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
`;

export default reset;
