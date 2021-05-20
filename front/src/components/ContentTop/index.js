import React from 'react';
import PropTypes from 'prop-types';
import { ContentTopWrapper } from './style';

const ContentTop = ({ children, top = false, width = '95%' }) => {
  return (
    <ContentTopWrapper top={top.toString()} width={width}>
      {children}
    </ContentTopWrapper>
  );
};

ContentTop.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.bool,
  width: PropTypes.string,
};

export default ContentTop;
