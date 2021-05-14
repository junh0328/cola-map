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
