// categories 페이자애서 음료수를 선택했을 때 해당 음료수에 대한 정보를 불러와 지도에 표시하기 위한 페이지입니다.

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { MapWrapper } from 'components/Map/style';
import { fetchMap } from 'reducers/map';
import { CategoryHeader } from './style';
import AimButton from 'components/AimButtonn';

const Category = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMap());
  }, []);

  return (
    <MapWrapper id="Map">
      <AimButton />
      <CategoryHeader>
        <h2>🌟 {name}에 대한 페이지입니다. 🌟</h2>
      </CategoryHeader>
    </MapWrapper>
  );
};

export default Category;

/*
카테고리별 페이지에 Map 지도 임시 패칭
z-index 값은 기본 지도가 1이므로, 1이상 줘야하고
position: 'relative'를 꼭 줘야 지도 위에 보여진다.
*/