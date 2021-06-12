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
  width: 100%;
  height: 80px;
  border-radius: 15px;
  transition: 0.3s;
  margin-top: 1.5em;
  cursor: pointer;
  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 6px 10px 4px #eee;
  }
  & a {
    /* color: #fff; */
    color: #000;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1em;
  }
`;
