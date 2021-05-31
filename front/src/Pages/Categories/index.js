import React from 'react';
import CategoryButton from '../../components/CategoryButton';
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
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '코카콜라',
    },
    {
      id: 3,
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '맥콜',
    },
    {
      id: 4,
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '스프라이트',
    },
    {
      id: 5,
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '칠성사이다',
    },
    {
      id: 6,
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '오란씨',
    },
    {
      id: 7,
      img: 'http://getdrawings.com/free-icon/coke-icon-70.png',
      name: '미린다',
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
