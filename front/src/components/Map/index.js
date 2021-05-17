import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper } from './style';
import { fetchMap } from '../../reducers/map';

export default function Map() {
  const dispatch = useDispatch();
  const { colaMap } = useSelector((state) => {
    return {
      colaMap: state.map.colaMap && state.map.colaMap.map,
    };
  });

  useEffect(() => {
    dispatch(fetchMap());
  }, []);

  // const test = () => {
  //   colaMap.setLevel(1);
  // };

  return (
    <>
      <MapWrapper id="Map" />
    </>
  );
}
