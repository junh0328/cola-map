import React from 'react';
import { MenuListWrapper } from './style';

const MenuList = ({ myPosts }) => {
  return (
    <div>
      {myPosts.map((post) => (
        <MenuListWrapper key={post._id}>
          <ul>
            <li onClick={() => (location.href = `store/${post.store.storeName}/${post.store.kakaoId}`)}>
              <p>{post.store.storeName}</p>
              <span>{post.drink === 'coca' ? '코카콜라' : '펩시'}</span>
            </li>
          </ul>
        </MenuListWrapper>
      ))}
    </div>
  );
};

export default MenuList;
