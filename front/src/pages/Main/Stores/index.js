import { LeftOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLocation, setAddress } from 'reducers/map';
import { CategoryHeader, CloseModalButton, RemoveRequestButton, StoreContent, StoreMain } from './style';
import { useKeyword } from 'apis/useKeyword';

const Store = () => {
  const { title } = useParams();
  console.log(title);

  const goToCategories = useCallback(() => {
    return history.go(-1);
  }, []);

  const dispatch = useDispatch();
  const { map } = useSelector((state) => {
    return {
      map: state.map.colaMap && state.map.colaMap.map,
    };
  });

  useEffect(() => {
    dispatch(getLocation());
    useKeyword(title);
  }, []);

  return (
    <div>
      <CategoryHeader>
        <CloseModalButton onClick={goToCategories}>
          <LeftOutlined />
        </CloseModalButton>
        <span>{title}</span>
        <RemoveRequestButton onClick={() => alert('삭제요청을 보내시겠습니까?')}>삭제요청</RemoveRequestButton>
      </CategoryHeader>
      <StoreMain>
        <StoreContent id="Map" />
        <StoreContent
          style={{
            backgroundColor: 'crimson',
          }}
        >
          <span>가게 정보 카드가 들어올 자리입니다</span>
        </StoreContent>
        <StoreContent
          style={{
            backgroundColor: 'salmon',
          }}
        >
          <span>리뷰 카드가 들어올 자리입니다</span>
        </StoreContent>
      </StoreMain>
    </div>
  );
};

export default Store;
