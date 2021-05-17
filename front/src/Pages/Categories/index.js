import React from 'react';
import CategoryButton from '../../components/CategoryButton';
import { CategoriesHeader, CategoriesMain, CategoriesWrapper, CategoryWrap } from './style';

const Categories = () => {
  return (
    <CategoriesWrapper>
      <CategoriesHeader>
        이 안에 <b>&nbsp;네 최애쯤</b>은 하나 있겠지!
      </CategoriesHeader>
      <CategoriesMain>
        <CategoryWrap>
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'펩시'} />
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'코카콜라'} />
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'맥콜'} />
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'미린다'} />
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'오란씨'} />
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'스프라이트'} />
          <CategoryButton img={'http://getdrawings.com/free-icon/coke-icon-70.png'} name={'칠성 사이다'} />
        </CategoryWrap>
      </CategoriesMain>
    </CategoriesWrapper>
  );
};

export default Categories;
