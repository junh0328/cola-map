// categories 페이자애서 음료수를 선택했을 때 해당 음료수에 대한 정보를 불러와 지도에 표시하기 위한 페이지입니다.

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { MapWrapper } from 'components/Map/style';
import { CategoryHeader, CloseModalButton } from './style';
import { LeftOutlined } from '@ant-design/icons';

import { MenuListWrapper } from 'components/MenuList/style';
import { GET_CATEGORY_REQUEST } from 'reducers/post';
import { useHistory } from 'react-router-dom';

import coca from 'apis/license/coca.png';
import pepsi from 'apis/license/pepsi.png';

const Category = () => {
  const { name } = useParams();
  const { categoryData } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');

  const history = useHistory();

  useEffect(() => {
    name && checkParams(name);
  }, []);

  useEffect(() => {
    categoryName && getCategory();
  }, [categoryName]);

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, []);

  const checkParams = (name) => {
    if (name === '펩시') setCategoryName('pepsi');
    if (name === '코카콜라') setCategoryName('coca');
  };

  const getCategory = useCallback(() => {
    if (categoryName && !categoryData.length) {
      dispatch({
        type: GET_CATEGORY_REQUEST,
        data: categoryName,
      });
    }
  }, [categoryName]);

  return (
    <MapWrapper>
      <CategoryHeader>
        <CloseModalButton onClick={goToCategories}>
          <LeftOutlined />
        </CloseModalButton>
        <span>
          {name === '펩시' ? (
            <>
              <img src={pepsi} style={{ width: 40 }} />
              펩시
            </>
          ) : (
            <>
              <img src={coca} style={{ width: 40 }} />
              코카콜라
            </>
          )}
        </span>
      </CategoryHeader>
      <div style={{ marginTop: 30, paddingRight: 20, overflow: 'scroll', height: '100vh' }}>
        {categoryData.length >= 1 &&
          categoryData.map((c) => (
            <MenuListWrapper key={c._id}>
              <ul>
                <li onClick={() => (location.href = `/store/${c.storeName}/${c.kakaoId}`)}>
                  <p>{c.storeName}</p>
                </li>
              </ul>
            </MenuListWrapper>
          ))}
      </div>
    </MapWrapper>
  );
};

export default Category;
