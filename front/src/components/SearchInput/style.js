import styled from '@emotion/styled';

export const SearchInputWrapper = styled.div`
  width: 90%;
  height: 5vh;
  z-index: 10000;
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none;
  width: 70vw;
  height: auto;
  background-color: white;
  color: #414141;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  box-shadow: 5px 6px 5px 1px rgba(0, 0, 0, 0.1);

  & span {
    margin-left: 6%;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
    padding: 5px;
  }
`;
