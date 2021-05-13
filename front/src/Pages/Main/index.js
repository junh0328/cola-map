import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_MAP_REQUEST } from '../../reducers/map';

export default function Main() {
  const { fetchMapDone } = useSelector((state) => state.map);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_MAP_REQUEST,
    });
  }, [dispatch]); // 마운트 될때 사용할수 있도록 useEffect 사용

  // redux-saga의 전반적인 흐름 보기
  useEffect(() => {
    console.log('fetch Done 상태 감지 :', fetchMapDone);
  }, [fetchMapDone]);

  return (
    <>
      {/* fetchMapDone = false 일 떼, 데이터를 불러오지 못했을 때 */}
      {fetchMapDone ? (
        <div
          id="Map"
          style={{
            width: '100vw',
            height: '95vh',
          }}
        ></div>
      ) : (
        <div>
          <h1>로딩중</h1>
        </div>
      )}
    </>
  );
}
