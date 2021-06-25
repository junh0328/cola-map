import styled from '@emotion/styled';
import { SettingOutlined } from '@ant-design/icons';

export const UserInfoWrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid #ddd;
  font-size: 1.2rem;
  color: #0f4c82;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

//cursor: 'pointer', position: 'absolute', right: '3%'

export const CustomSettingOutlined = styled(SettingOutlined)`
  cursor: pointer;
  position: absolute;
  right: 3%;

  @media (max-width: 400px) {
    right: 6%;
  }
  @media (max-width: 580px) {
    right: 6%;
  }
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

  @media (max-width: 425px) {
    padding-left: 6%;
  }
  @media (max-width: 580px) {
    border: 2px solid #0f4c82;
    padding-left: 6%;
  }
`;
