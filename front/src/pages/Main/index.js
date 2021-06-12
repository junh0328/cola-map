import { useCallback, useEffect, useRef } from 'react';
import { MapWrapper, MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AimButton from 'components/AimButtonn';
import SearchInput from 'components/SearchInput';
import Map from 'components/Map';

export default function Main() {
  const selectId = useCallback((id) => {
    console.log(`선택된 id는 ${id}입니다`);
    // 후에 해당 슬라이더를 클릭했을 때 정보를 불러오도록 만들 수도 있을 것
  }, []);

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
      <Map />
      <SearchInput />
      <AimButton />
      <SlideWrapper>
        <MySlider {...settings} style={{ height: '100%' }}>
          {items.map((item) => {
            return (
              <SlideMainWrapper key={item.id} onClick={() => selectId(item.id)}>
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
