import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_MAP_REQUEST } from '../../reducers/map';
import Map from '../../components/Map';

export default function Main() {
  return (
    <>
      <Map />
    </>
  );
}
