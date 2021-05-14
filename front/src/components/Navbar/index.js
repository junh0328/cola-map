import React from 'react';
import { Link } from 'react-router-dom';
import { LinkWrapper } from './style';
import { BarsOutlined, FormOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <LinkWrapper>
      <a href="/">
        <HomeOutlined />
      </a>
      <Link to="/categories">
        <BarsOutlined />
      </Link>
      <Link to="/submit">
        <FormOutlined />
      </Link>
      <Link to="/private">
        <SmileOutlined />
      </Link>
    </LinkWrapper>
  );
};

export default Navbar;
