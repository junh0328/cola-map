import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper, MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import { fetchMap } from '../../reducers/map';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AimButton from '../AimButtonn';
import SearchInput from '../SearchInput';

export default function Map() {
  const dispatch = useDispatch();
  const { colaMap } = useSelector((state) => {
    return {
      colaMap: state.map.colaMap && state.map.colaMap.map,
    };
  });
  const { getLocationDone } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(fetchMap());
  }, []);

  // useEffect(() => {
  //   if (colaMap) {
  //     console.log('colaMap 객체 값 관리', colaMap);
  //   }
  // }, [colaMap]);

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

  return (
    <>
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
      </MapWrapper>
    </>
  );
}
