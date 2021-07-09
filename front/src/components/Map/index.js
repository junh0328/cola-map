import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper } from './style';
import { getLocation, setAddress } from 'reducers/map';

export default function Map() {
  /**
   * store: 중심 좌표 기준 주변 가게들
   * markers: 주변 가게들 마커
   */
  const [stores, setStores] = useState([]);
  const [markers, setMarkers] = useState([]);

  const dispatch = useDispatch();
  const { map } = useSelector((state) => {
    return {
      map: state.map.colaMap && state.map.colaMap.map,
    };
  });

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  useEffect(() => {
    if (map) {
      kakao.maps.event.addListener(map, 'idle', () => {
        getAddress();
        getKeyword();
      });
    }
  }, [map]);

  useEffect(() => {
    addMarker();
  }, [stores]);

  useEffect(() => {
    markersControl();
  }, [markers]);

  const getAddress = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    const { La, Ma } = map.getCenter();
    geocoder.coord2Address(La, Ma, (result, status) => {
      dispatch(setAddress(result[0], status));
    });
  };

  const getKeyword = () => {
    const places = new kakao.maps.services.Places(map);
    const radius = 1000;
    places.categorySearch(
      'FD6', // https://apis.map.kakao.com/web/documentation/#CategoryCode
      function (result, status) {
        // callback
        setStores(result);
      },
      {
        useMapCenter: true,
        radius: radius, // 반경
        sort_by: 'DISTANCE', // 정렬 옵션 (https://apis.map.kakao.com/web/documentation/#services_SortBy)
      },
    );
  };

  const addMarker = () => {
    const tmpMarkers = [];
    stores.forEach((data) => {
      const { x, y, place_name, id } = data;
      const position = new kakao.maps.LatLng(y, x);
      const markerItem = new kakao.maps.Marker({
        title: place_name,
        position: position,
      });
      kakao.maps.event.addListener(markerItem, 'click', () => {
        location.href = `store/${place_name}/${id}`;
      })
      tmpMarkers.push(
        markerItem
      );
    });
    setMarkers(tmpMarkers);
    markersControl(true);
  };

  const markersControl = (del = false) => {
    for (let i = 0; i < markers.length; i++) {
      del ? markers[i].setMap(null) : markers[i].setMap(map);
    }
  };

  return (
    <>
      <MapWrapper id="Map" />
    </>
  );
}
