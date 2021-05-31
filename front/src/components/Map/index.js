import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper } from './style';
import { getLocation, setAddress } from '../../reducers/map';

export default function Map() {
  const dispatch = useDispatch();
  const { map } = useSelector((state) => {
    return {
      map: state.map.colaMap && state.map.colaMap.map,
    };
  });
  const { getLocationDone } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  useEffect(() => {
    if (map) {
      kakao.maps.event.addListener(map, 'idle', getAddress);
    }
  }, [map]);

  const getAddress = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    const { La, Ma } = map.getCenter();
    geocoder.coord2Address(La, Ma, (result, status) => {
      dispatch(setAddress(result[0], status));
    });
  };

  useEffect(() => {
    if (getLocationDone) {
      //alert('여기 계신가요?');
    }
  }, [getLocationDone]);

  return (
    <>
      <MapWrapper id="Map" />
    </>
  );
}
