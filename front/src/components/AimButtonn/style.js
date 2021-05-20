import styled from '@emotion/styled';
import { AimOutlined } from '@ant-design/icons';

export const AimButtonWrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  z-index: 10000;
  bottom: '30%';
  right: '5%';
  box-shadow: 5px 6px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const CustomAim = styled(AimOutlined)`
  font-size: '3rem';
  z-index: 9999;
  background: '#fff';
  color: '#0F4C82';
  padding: 10;
  cursor: 'pointer';
  border-radius: '50%';

  @media (max-width: 350px) {
    font-size: '2rem';
  }
`;
