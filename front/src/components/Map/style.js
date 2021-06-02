import styled from '@emotion/styled';

export const MapWrapper = styled.div`
  height: ${(props) => (props.height === 'small' ? 'calc(95vh - 220px)' : '95vh')};
`;
