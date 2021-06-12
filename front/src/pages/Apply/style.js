import styled from '@emotion/styled';

export const ApplyContentWrapper = styled.div`
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em 0;
  row-gap: 10px;
  & > * {
    width: 80%;
    margin: 0;
  }
`;

export const ApplyButton = styled.button`
  background-color: #0e4c82;
  border: none;
  border-radius: 30px;
  padding: 1em 0;
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const CenterMarker = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  box-shadow: 0 0 10px 3px #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
