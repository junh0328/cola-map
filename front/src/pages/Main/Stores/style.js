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

export const RemoveRequestButton = styled.div`
  color: #0f4c82;
  position: absolute;
  right: 6%;
  font-size: 1rem;
  cursor: pointer;
`;

export const StoreMain = styled.div`
  overflow: auto;
  height: 90vh;
`;

export const StoreContent = styled.div`
  background-color: rgb(249, 249, 249);
  height: 50vh;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;

  & span {
    display: flex;
    align-items: center;
  }
`;
