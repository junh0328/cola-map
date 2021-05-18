import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapWrapper } from './style';
import { fetchMap, fetchAddress } from '../../reducers/map';
import useUserLocation from '../../apis/useUserLocation';

export default function Map() {
  const dispatch = useDispatch();
  const { location } = useUserLocation();
  const { map } = useSelector((state) => {
    return {
      map: state.map.colaMap && state.map.colaMap.map,
    };
  });

  useEffect(() => {
    dispatch(fetchMap());
  }, []);

  useEffect(() => {
    if (location && map) {
      const { latitude, longitude } = location;
      map && map.setCenter(new kakao.maps.LatLng(latitude, longitude));

      const geocoder = new kakao.maps.services.Geocoder();
      kakao.maps.event.addListener(map, 'dragend', function () {
        const { La, Ma } = map.getCenter();
        geocoder.coord2Address(La, Ma, (result, status) => {
          dispatch(fetchAddress(result[0], status));
        });
      });
    }
  }, [map, location]);

  return (
    <>
      <MapWrapper id="Map" />
    </>
  );
}
