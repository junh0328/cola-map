// categories 페이자애서 음료수를 선택했을 때 해당 음료수에 대한 정보를 불러와 지도에 표시하기 위한 페이지입니다.

import React from 'react';
import { useParams } from 'react-router';

const Category = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}에 대한 페이지입니다.</h1>
    </div>
  );
};

export default Category;
