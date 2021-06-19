import { LeftOutlined } from '@ant-design/icons';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryHeader, CloseModalButton } from './style';

const Store = () => {
  const { title } = useParams();

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, []);

  return (
    <CategoryHeader>
      <CloseModalButton onClick={goToCategories}>
        <LeftOutlined />
      </CloseModalButton>
      <span>{title}</span>
    </CategoryHeader>
  );
};

export default Store;
