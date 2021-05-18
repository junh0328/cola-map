import styled from '@emotion/styled';

export const ContentTopWrapper = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${(props) => (props.top === 'true' ? '0' : '10px')};
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: ${(props) => (props.top === 'true' ? '0 2px 7px 2px #ddd' : '0 0 7px 2px #ddd')};
  ${(props) =>
    props.top === 'true' &&
    `
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    `}
  & > h1, & > span {
    font-weight: 500;
    font-size: 1.5rem;
  }

  & > span {
    position: absolute;
    left: 10%;
    cursor: pointer;
  }
`;
