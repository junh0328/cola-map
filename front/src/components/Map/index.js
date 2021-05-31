import { useEffect } from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { MapWrapper, MarkerIcon } from './style';
import { fetchMap, fetchAddress } from '../../reducers/map';
import PropTypes from 'prop-types';
=======
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper, MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import { fetchMap } from '../../reducers/map';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AimButton from '../AimButtonn';
import SearchInput from '../SearchInput';
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a

import useUserLocation from '../../apis/useUserLocation';

Map.propTypes = {
  height: PropTypes.string,
};

export default function Map({ height }) {
  const dispatch = useDispatch();
  const { map } = useSelector((state) => {
    return {
<<<<<<< HEAD
      map: state.map.colaMap && state.map.colaMap.map,
      location: state.map.address,
    };
  });
  const { setMapCenter } = useUserLocation();
=======
      colaMap: state.map.colaMap && state.map.colaMap.map,
    };
  });
  const { getLocationDone } = useSelector((state) => state.map);
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a

  useEffect(() => {
    dispatch(fetchMap());
  }, []);

  useEffect(() => {
<<<<<<< HEAD
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
=======
    if (getLocationDone) {
      alert('여기 계신가요?');
    }
  }, [getLocationDone]);

  // useEffect(() => {
  //   if (colaMap) {
  //     console.log('colaMap 객체 값 관리', colaMap);
  //   }
  // }, [colaMap]);

  const items = [
    { id: 1, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '펩시' },
    { id: 2, url: 'http://www.hahn.ph/wp-content/uploads/2021/02/coke-no-sugar-slim.png', name: '코카콜라' },
    { id: 3, url: 'http://www.hahn.ph/wp-content/uploads/2021/02/sprite-slim.png', name: '스프라이트' },
    { id: 4, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '사이다' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a
  };

  return (
    <>
<<<<<<< HEAD
      <MapWrapper id="Map" height={height}>
        <MarkerIcon>
          <img src="/images/marker.png" alt="marker" />
        </MarkerIcon>
=======
      <MapWrapper id="Map">
        <SearchInput />
        <AimButton />
        <SlideWrapper>
          <MySlider {...settings} style={{ height: '100%' }}>
            {items.map((item) => {
              return (
                <SlideMainWrapper key={item.id}>
                  <SlideImgWrapper>
                    <img src={item.url} />
                  </SlideImgWrapper>
                  <SlideName>{item.name}</SlideName>
                </SlideMainWrapper>
              );
            })}
          </MySlider>
        </SlideWrapper>
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a
      </MapWrapper>
    </>
  );
}
