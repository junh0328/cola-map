// categories 페이자애서 음료수를 선택했을 때 해당 음료수에 대한 정보를 불러와 지도에 표시하기 위한 페이지입니다.

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { MapWrapper } from 'components/Map/style';
import { fetchMap } from 'reducers/map';
import { CategoryHeader, CloseModalButton } from './style';
import AimButton from 'components/AimButtonn';
import { LeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import { MenuListWrapper } from 'components/MenuList/style';

const Category = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    name && checkParams(name);
  }, []);

  useEffect(() => {
    categoryName && getCategory();
  }, [categoryName]);

  useEffect(() => {
    if (categoryList.length) console.log('categoryList: ', categoryList);
  }, [categoryList]);

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, []);

  const checkParams = (name) => {
    if (name === '펩시') setCategoryName('pepsi');
    if (name === '코카콜라') setCategoryName('coca');
  };

  const getCategory = async () => {
    if (categoryName) {
      const { data: result } = await axios.get(`store/category/${categoryName}`);
      setCategoryList(result);
    }
  };

  return (
    <MapWrapper>
      <CategoryHeader>
        <CloseModalButton onClick={goToCategories}>
          <LeftOutlined />
        </CloseModalButton>
        <span>{name} (을/를) 픽한 가게 목록 보기</span>
      </CategoryHeader>
      <div style={{ marginTop: 30, paddingRight: 20 }}>
        {categoryList.length &&
          categoryList.map((c) => (
            <MenuListWrapper key={c._id}>
              <ul>
                <li>
                  <p>{c.storeName}</p>
                  <p>{c.mostPosted === 'coca' ? '코카콜라' : '펩시'}</p>
                </li>
              </ul>
            </MenuListWrapper>
          ))}
      </div>
    </MapWrapper>
  );
};

export default Category;

/*
카테고리별 페이지에 Map 지도 임시 패칭
z-index 값은 기본 지도가 1이므로, 1이상 줘야하고
position: 'relative'를 꼭 줘야 지도 위에 보여진다.
*/

/*
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
*/
