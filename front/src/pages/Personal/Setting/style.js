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
  padding: 0 2em;
`;

export const PersonalLinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  width: 100%;
  border-radius: 15px;
  margin-top: 1.5em;
  padding: 1em;
  cursor: pointer;

  & a {
    /* color: #fff; */
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    display: block;
    display: flex;
    align-items: center;
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
`;

export const UserInfoWrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid #ddd;
  font-size: 1.2rem;
  color: #0f4c82;
`;

export const UserInfoWrapperMain = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 3px solid #0f4c82;
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
`;
