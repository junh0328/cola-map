import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkWrapper } from './style';
import { BarsOutlined, FormOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

const Navbar = () => {
  const activeStyle = {
    color: '#0f4c82',
  };

  return (
    <LinkWrapper>
      <NavLink to="/" exact activeStyle={activeStyle}>
        <HomeOutlined />
      </NavLink>
      <NavLink to="/categories" activeStyle={activeStyle}>
        <BarsOutlined />
      </NavLink>
      <NavLink to="/personal" activeStyle={activeStyle}>
        <SmileOutlined />
      </NavLink>
    </LinkWrapper>
  );
};

export default Navbar;
