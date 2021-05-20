import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapWrapper, MarkerIcon } from './style';
import { fetchMap, fetchAddress } from '../../reducers/map';
import useUserLocation from '../../apis/useUserLocation';
import PropTypes from 'prop-types';

Map.propTypes = {
  height: PropTypes.string,
};

export default function Map({ height }) {
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
      // 초기 값
      //getAddress();
      const { latitude, longitude } = location;
      map && map.setCenter(new kakao.maps.LatLng(latitude, longitude));

      // 드래그가 끝날 때 발생한다.
      //kakao.maps.event.addListener(map, 'dragend', () => getAddress());
    }
  }, [map, location]);

  const getAddress = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    const { La, Ma } = map.getCenter();
    geocoder.coord2Address(La, Ma, (result, status) => {
      dispatch(fetchAddress(result[0], status));
    });
  };

  return (
    <>
      <MapWrapper id="Map" height={height}>
        <MarkerIcon>
          <img src="/images/marker.png" alt="marker" />
        </MarkerIcon>
      </MapWrapper>
    </>
  );
}
