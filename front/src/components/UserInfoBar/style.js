import styled from '@emotion/styled';

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
