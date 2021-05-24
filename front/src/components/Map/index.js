import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapWrapper, MarkerIcon } from './style';
import { fetchMap, fetchAddress } from '../../reducers/map';
import PropTypes from 'prop-types';

import useUserLocation from '../../apis/useUserLocation';

Map.propTypes = {
  height: PropTypes.string,
};

export default function Map({ height }) {
  const dispatch = useDispatch();
  const { map } = useSelector((state) => {
    return {
      map: state.map.colaMap && state.map.colaMap.map,
      location: state.map.address,
    };
  });
  const { setMapCenter } = useUserLocation();

  useEffect(() => {
    dispatch(fetchMap());
  }, []);

  useEffect(() => {
    setMapCenter();
    if (map) {
      kakao.maps.event.addListener(map, 'idle', getAddress);
    }
  }, [map]);

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
