import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MapWrapper, MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import { fetchMap } from '../../reducers/map';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const items = [
    { id: 1, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '펩시' },
    { id: 2, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '코카콜라' },
    { id: 3, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '스프라이트' },
    { id: 4, url: 'http://getdrawings.com/free-icon/coke-icon-70.png', name: '사이다' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  return (
    <>
      <MapWrapper id="Map">
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
