import styled from '@emotion/styled';

export const PersonalWrapper = styled.div`
  width: 100%;
  height: 95vh;
  background-color: #fff;
  padding: 1em;
  position: relative;
  overflow-y: auto;
`;

export const PersonalContentBox = styled.div`
  width: 100%;
`;

export const PersonalLinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 1.5em;
  padding: 1em;
  transition: 0.3s;

  & a {
    /* color: #fff; */
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: #0f4c82;
    }
  }
  & button {
    font-size: 1.1rem;
    border: none;
    background-color: white;
    position: absolute;
    right: 6%;
    color: #0f4c82;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    margin-top: 1em;
    padding: 0.5em;
    & a {
      font-size: 1rem;
    }
  }
`;

export const UserInfoWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  font-size: 1.2rem;
  color: #0f4c82;
`;

export const UserInfoWrapperMain = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 10px;
  padding-left: 3%;
  border-radius: 30px;

  & span {
    display: flex;
    font-weight: bolder;
  }

  & a {
    display: flex;
    align-items: center;
    color: #0f4c82;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const UserInfoWrapperSub = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-left: 3%;
  padding: 3% 0;
  font-weight: bolder;

  & span {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    & span {
      font-size: 0.9rem;
    }
  }
`;

export const UserInfoWrapperSubBtn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 3%;

  & div {
    margin-left: 10px;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    & div {
      font-size: 0.8rem;
    }
  }
`;
