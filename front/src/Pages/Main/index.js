import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_MAP_REQUEST } from '../../reducers/map';

export default function Main() {
  const { fetchMapDone } = useSelector((state) => state.map);
  const { map } = useSelector((state) => state.map.colaMap);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('map 감지: ', map);
  }, [map]);
  useEffect(() => {
    dispatch({
      type: FETCH_MAP_REQUEST,
    });
  }, []);

  return (
    <>
      {fetchMapDone ? (
        <div
          id="Map"
          style={{
            height: '95vh',
          }}
        ></div>
      ) : (
        <div>
          <h1>...on Loading</h1>
        </div>
      )}
    </>
  );
}
