import React from 'react';
import CategoryButton from 'components/CategoryButton';
import { CategoriesHeader, CategoriesMain, CategoriesWrapper, CategoryWrap } from './style';
import coca from 'apis/license/coca.png';
import pepsi from 'apis/license/pepsi.png';

const Categories = () => {
  const bevarages = [
    {
      id: 1,
      img: pepsi,
      name: '펩시',
    },
    {
      id: 2,
      img: coca,
      name: '코카콜라',
    },
  ];

  return (
    <CategoriesWrapper>
      <CategoriesHeader>
        당신의 <b>&nbsp;최애를&nbsp;</b>픽해주세요!
      </CategoriesHeader>
      <CategoriesMain>
        <CategoryWrap>
          {bevarages.map((beverage) => {
            return <CategoryButton key={beverage.id} img={beverage.img} name={beverage.name} />;
          })}
        </CategoryWrap>
      </CategoriesMain>
    </CategoriesWrapper>
  );
};

export default Categories;
