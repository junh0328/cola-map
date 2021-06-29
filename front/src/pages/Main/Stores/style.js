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

  @media (max-width: 425px) {
    & span {
      font-size: 1rem;
    }
  }
`;

export const CloseModalButton = styled.div`
  position: absolute;
  left: 6%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RemoveRequestButton = styled.div`
  color: #0f4c82;
  position: absolute;
  right: 6%;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
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
  padding: 6%;
  padding-bottom: 20px;

  @media (max-width: 425px) {
    padding: 6%;
  }
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

  @media (max-width: 425px) {
    & button {
      padding: 5px 10px;
      font-size: 1rem;
    }
  }
`;

export const StoreContentHeaderMain = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const StoreContentHeaderSub = styled.div`
  margin-left: 10px;
  font-size: 1.5rem;
  font-weight: bolder;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
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
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 4%;
`;

export const StoreContentReviewWrap = styled.div`
  margin-bottom: 3%;
`;

export const MyCard = styled(Card)`
  height: 170px;
  border-radius: 15px;
`;

export const StoreContentCategory = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
`;

export const StoreContentCategoryHeader = styled.div`
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const StoreContentCategoryMain = styled.div`
  font-weight: normal;
  position: absolute;
  right: 20px;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

// 중간 막대 그래프와 form 태그 관련

export const MyGraph = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: crimson;
  border-radius: 20px;
  padding: 5px;
`;

export const FormCategoryWrap = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormCategoryMain = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 100px;
  }
  & span {
    font-weight: 400;
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    & img {
      width: 50px;
    }
    & span {
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

export const FormCategorySub = styled.div``;

export const CustomBtn = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #0f4c82;
  color: white;
  border-radius: 32px;
  cursor: pointer;

  @media (max-width: 425px) {
    padding: 5px 10px;
    font-size: 1rem;
  }
`;
