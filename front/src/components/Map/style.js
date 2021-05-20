import styled from '@emotion/styled';

export const MapWrapper = styled.div`
  height: ${(props) => (props.height !== 'small' ? '95vh' : `calc(95vh - 220px)`)};
`;

export const MarkerIcon = styled.div`
  width: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 50%;
  & > img {
    width: 100%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
