import React from 'react';
import Navbar from '../Navbar';
import { MainContent, MainWrapper } from './style';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <MainWrapper>
      <MainContent>{children}</MainContent>
      <Navbar />
    </MainWrapper>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
