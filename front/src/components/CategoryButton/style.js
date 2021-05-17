import styled from '@emotion/styled';

// 카테고리 (각 음료 아이템)
export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 5px;
  height: auto;
  background-color: white;
  padding: 8% 0;
`;

// 콘텐츠 레퍼 (이미지 + 이름을 감싼다.)
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

// 콘텐츠 이미지
export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;

  & img {
    width: 40%;
    height: 40%;
  }
`;

// 콘텐츠 이름
export const ContentName = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;
