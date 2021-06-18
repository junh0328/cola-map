import React from 'react';
import { useParams } from 'react-router-dom';

const Store = () => {
  const { title } = useParams();

  return <div>{title}에 대한 세부 페이지입니다</div>;
};

export default Store;
