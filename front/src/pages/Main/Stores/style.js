import styled from '@emotion/styled';
import { Card } from 'antd';

export const CategoryHeader = styled.div`
  position: relative;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 0;
  box-shadow: 5px 6px 5px 1px rgb(0 0 0 / 10%);

  & span {
    font-size: 1.3rem;
  }
`;

export const CloseModalButton = styled.div`
  position: absolute;
  left: 6%;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const RemoveRequestButton = styled.div`
  color: #0f4c82;
  position: absolute;
  right: 6%;
  font-size: 1rem;
  cursor: pointer;
`;

export const StoreMain = styled.div`
  overflow-x: hidden !important;
  overflow: auto;
  height: 90vh;
  background-color: rgb(249, 249, 249);
`;

export const StoreMap = styled.div`
  height: 40vh;
`;

export const StoreContent = styled.div`
  align-items: center;
  background-color: rgb(249, 249, 249);
  height: auto;
  color: black;
  font-size: 1.2rem;
  padding: 0 6%;
  padding-bottom: 20px;
`;

export const StoreContentHeader = styled.div`
  display: flex;
  padding: 4% 0;
  position: relative;
  align-items: center;

  & button {
    border: none;
    position: absolute;
    right: 0;
    padding: 10px 20px;
    background-color: #0f4c82;
    color: white;
    border-radius: 32px;
    cursor: pointer;
  }
`;

export const StoreContentHeaderMain = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const StoreContentHeaderSub = styled.div`
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const StoreContentMain = styled.div`
  background-color: white;
  font-weight: bolder;
  border-radius: 20px;
  box-shadow: 4px 5px 4px 0px rgb(0 0 0 / 10%);
`;

//  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'
export const StoreContentReview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 4%;
`;

export const StoreContentReviewWrap = styled.div`
  margin-right: 10px;
`;

export const MyCard = styled(Card)`
  height: 170px;
`;

export const StoreContentCategory = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
`;

export const StoreContentCategoryHeader = styled.div``;

export const StoreContentCategoryMain = styled.div`
  font-weight: normal;
  position: absolute;
  right: 20px;
`;
