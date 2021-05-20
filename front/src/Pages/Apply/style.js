import styled from '@emotion/styled';

export const ApplyContentWrapper = styled.div`
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  z-index: 9999;
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
