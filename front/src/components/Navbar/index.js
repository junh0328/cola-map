import React from 'react';
import { Link } from 'react-router-dom';
import { LinkWrapper } from './style';
import { BarsOutlined, FormOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <LinkWrapper>
      <Link to="/">
        <HomeOutlined />
      </Link>
      <Link to="/categories">
        <BarsOutlined />
      </Link>
      <Link to="/apply">
        <FormOutlined />
      </Link>
      <Link to="/personal">
        <SmileOutlined />
      </Link>
    </LinkWrapper>
  );
};

export default Navbar;
