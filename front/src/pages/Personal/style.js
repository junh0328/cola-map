import styled from '@emotion/styled';
import { Card } from 'antd';

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
  padding: 0 1%;
`;

export const PersonalContentBoxWrap = styled.div`
  padding-top: 4%;
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
    /* font-size: 1.5rem; */
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

  @media (max-width: 580px) {
    & button {
      font-size: 0.9rem;
    }
  }
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 1%;

  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MyCard = styled(Card)`
  margin: 3px;
`;
