import React from 'react';
import { Category, ContentName, ContentWrapper, ContentImg } from './style';
import PropTypes from 'prop-types';

const CategoryButton = ({ img, name }) => {
  return (
    <Category>
      <ContentWrapper>
        <ContentImg>
          <img src={img} alt="이미지" />
        </ContentImg>
        <ContentName>{name}</ContentName>
      </ContentWrapper>
    </Category>
  );
};

CategoryButton.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryButton;
