import styled from '@emotion/styled';

export const SearchInputWrapper = styled.div`
  margin-top: 6%;
  height: 5vh;
  z-index: 10000;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 4%;
  margin-right: 4%;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: none;
  width: 60vw;
  height: auto;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  outline: none;
  box-shadow: 5px 6px 5px 1px rgba(0, 0, 0, 0.1);

  & span {
    margin-left: 2%;
  }

  @media (max-width: 350px) {
    font-size: 0.6rem;
  }
`;
