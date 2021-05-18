import React from 'react';
import { ContentTopWrapper } from './style';

const ContentTop = ({ children, top = false, width = '95%' }) => {
  return (
    <ContentTopWrapper top={top.toString()} width={width}>
      {children}
    </ContentTopWrapper>
  );
};

export default ContentTop;
