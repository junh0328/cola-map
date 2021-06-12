import styled from '@emotion/styled';

export const ApplyFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${(props) => (props.isApplyForm === 'true' ? '0' : '120%')};
  background-color: #fafafa;
  z-index: 9990;
  transition: 0.5s;
  padding: 6em 1em 0 2em;
`;

export const ApplyFormContent = styled.div`
  width: 100%;
`;

export const ApplyFormTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em 0;
  & > b {
    font-size: 1.1rem;
    position: relative;
    padding-left: 0.5em;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 2px;
      height: 100%;
      background-color: #0e4c82;
    }
  }
`;

export const ApplyFormInput = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: 15px;
  border: 1px solid #ddd;
  font-size: 1.1rem;
  margin-top: 1em;
`;

export const ApplyFormSelect = styled.select`
  width: 100%;
  padding: 1em;
  border-radius: 15px;
  border: 1px solid #ddd;
  font-size: 1.1rem;
  margin-top: 1em;
`;
