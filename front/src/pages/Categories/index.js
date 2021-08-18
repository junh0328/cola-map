import React, { useEffect } from 'react';
import CategoryButton from 'components/CategoryButton';
import { CategoriesHeader, CategoriesMain, CategoriesWrapper, CategoryWrap } from './style';
import coca from 'apis/license/coca.png';
import pepsi from 'apis/license/pepsi.png';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_CATEGORY_LIST } from 'reducers/post';

const Categories = () => {
  const { categoryData } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    categoryData &&
      dispatch({
        type: RESET_CATEGORY_LIST,
      });
  }, []);

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
