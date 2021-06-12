import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper } from './style';
import { getLocation, setAddress } from 'reducers/map';

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

  const items = [
    { id: 0, url: '', name: '전체 정보 보기' },
    { id: 1, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '펩시' },
    { id: 2, url: 'http://www.hahn.ph/wp-content/uploads/2021/02/coke-no-sugar-slim.png', name: '코카콜라' },
    // { id: 3, url: 'http://www.hahn.ph/wp-content/uploads/2021/02/sprite-slim.png', name: '스프라이트' },
    // { id: 4, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '사이다' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,

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
