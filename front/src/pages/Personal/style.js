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

export const PersonalContentBoxWrap = styled.div`
  padding-top: 50px;
`;

export const PersonalLinkBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  width: 100%;
  border-radius: 15px;
  margin-top: 1.5em;
  padding: 1em;
  cursor: pointer;

  & a {
    /* color: #fff; */
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    display: block;
    display: flex;
    align-items: center;
  }
  & button {
    font-size: 1.1rem;
    border: none;
    background-color: white;
    position: absolute;
    right: 6%;
    color: #0f4c82;
    cursor: pointer;
  }
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 10;
`;
