import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Card } from 'antd';

const { Meta } = Card;

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
      font-size: 0.9rem;
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
    font-size: 0.7rem;
  }
`;

export const RemoveRequestButton2 = styled.div`
  color: #0f4c82;
  position: absolute;
  right: 16%;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 425px) {
    font-size: 0.7rem;
    right: 18%;
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
  background: white;
  background-color: ${(props) => props.category === 'pepsi' && '#e1f5fe'};
  background-color: ${(props) => props.category === 'coca' && '#fce4ec'};
  display: grid;
  position: relative;

  & p {
    display: flex;
    align-items: center;
    width: 70%;
  }

  & img {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 90px;
  }

  & input {
    padding: 0 !important;
  }

  @media (max-width: 425px) {
    & img {
      bottom: 10%;
      width: 20%;
    }

    & input {
      font-size: 0.8rem;
    }
  }
`;

export const MyFormOutlined = styled(FormOutlined)`
  position: absolute;
  right: 75px;
  top: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  @media (max-width: 425px) {
    right: 60px;
  }
`;

export const MyDeleteOutlined = styled(DeleteOutlined)`
  position: absolute;
  right: 45px;
  top: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  @media (max-width: 425px) {
    right: 30px;
  }
`;

export const MyCardMeta = styled(Meta)`
  & p {
    color: black;
  }
`;

export const StoreContentCategory = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const StoreContentCategoryHeader = styled.div`
  display: flex;
  font-weight: normal;

  & span {
    font-weight: bolder;
  }
  @media (max-width: 425px) {
    font-size: 0.9rem;
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
  background-color: #ffcdd2;
  border-radius: 20px;
`;

// width를 props로 전달받음
export const InnerGraph = styled.div`
  background: #bbdefb;
  width: ${(props) => props.width}%;
  padding: 8px;
  border-radius: 20px;
`;

export const FormCategoryWrap = styled.div`
  padding-top: 6%;
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

    & b {
      font-size: 0.9rem;
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
