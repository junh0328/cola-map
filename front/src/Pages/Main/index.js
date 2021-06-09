import React from 'react';
import { MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import Map from 'components/Map';
import AimButton from 'components/AimButtonn';
import SearchInput from 'components/SearchInput';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Main() {
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
  };
  return (
    <>
      <SearchInput />
      <Map />
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
    </>
  );
}
