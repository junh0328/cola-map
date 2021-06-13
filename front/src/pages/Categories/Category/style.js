import styled from '@emotion/styled';

export const CategoryHeader = styled.div`
  position: relative;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 0;

  & span {
    font-size: 1.3rem;
  }
`;

export const CloseModalButton = styled.div`
  position: absolute;
  left: 6%;
  font-size: 1.5rem;
  cursor: pointer;
`;
