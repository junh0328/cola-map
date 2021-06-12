import styled from '@emotion/styled';

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  padding: 1em;
  outline: none;
  margin-top: 1em;
  font-size: 1.1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5em;
  cursor: pointer;
  border: none;
  background-color: #f5f5f5;
  transition: 0.3s;
  &:hover {
    box-shadow: inset 0 3px 7px 2px #eee;
  }
`;
