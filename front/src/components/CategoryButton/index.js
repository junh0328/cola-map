import React, { useCallback } from 'react';
import { Category, ContentName, ContentWrapper, ContentImg } from './style';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CategoryButton = ({ img, name }) => {
  return (
    <NavLink to={`/categories/category/${name}`} style={{ textDecoration: 'none', color: 'black' }}>
      <Category style={{ cursor: 'pointer' }}>
        <ContentWrapper>
          <ContentImg>
            <img src={img} alt="이미지" />
          </ContentImg>
          <ContentName>{name}</ContentName>
        </ContentWrapper>
      </Category>
    </NavLink>
  );
};

CategoryButton.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryButton;

/*
동적 라우팅을 통해 navLink에 선택되는 음료를 라우팅처리합니다.
*/
