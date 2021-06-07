import styled from '@emotion/styled';

// 전체 레퍼
export const CategoriesWrapper = styled.div`
  background-color: #f1f1f1;
  height: 95vh;
`;

// 큰 분류 (카레고리 헤더 파트)
export const CategoriesHeader = styled.div`
  font-size: 1.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 5% 0;
`;

// 큰 분류 (카레고리 메인 파트)
export const CategoriesMain = styled.div``;

// 카테고리 레퍼 (모든 음료)
export const CategoryWrap = styled.div`
  padding: 0 1%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

/*
후에 음료 종류 추가시, 다시 그리드로 설정
export const CategoryWrap = styled.div`
  padding: 0 1%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
 */
