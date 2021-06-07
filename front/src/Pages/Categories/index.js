import React from 'react';
import CategoryButton from 'components/CategoryButton';
import { CategoriesHeader, CategoriesMain, CategoriesWrapper, CategoryWrap } from './style';

const Categories = () => {
  const bevarages = [
    {
      id: 1,
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '펩시',
    },
    {
      id: 2,
      img: 'http://img.danawa.com/prod_img/500000/840/156/img/3156840_1.jpg?shrink=500:500&_v=20200326113047',
      name: '코카콜라',
    },
  ];

  return (
    <CategoriesWrapper>
      <CategoriesHeader>
        이 안에 <b>&nbsp;네 최애쯤</b>은 하나 있겠지!
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
