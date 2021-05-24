import { useSelector } from 'react-redux';

/*
 * 사용자의 위치 정보를 받는 api
 */
export default function useUserLocation() {
  const { map } = useSelector((state) => {
    return {
      map: state.map.colaMap && state.map.colaMap.map,
    };
  });

  const setMapCenter = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        map && map.panTo(new kakao.maps.LatLng(latitude, longitude));
      });
    } else {
      alert(`위치 정보가 없습니다.`);
    }
  };

  return {
    setMapCenter,
  };
}
