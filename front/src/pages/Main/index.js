import { useCallback, useEffect, useRef } from 'react';
import { MapWrapper, MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AimButton from 'components/AimButtonn';
import SearchInput from 'components/SearchInput';
import Map from 'components/Map';
import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';

export default function Main() {
  const selectInfo = useCallback((id, title) => {
    console.log(`${title}의 id는 ${id}입니다`);
  }, []);

  const positions = [
    {
      id: 1,
      title: '내 위치',
      latlng: null,
    },
    {
      id: 2,
      title: '내손 의왕 메가커피',
      latlng: new kakao.maps.LatLng(37.38992745536002, 126.97743015243483),
      img: coca,
    },
    {
      id: 3,
      title: '평촌동 두산벤쳐다임',
      latlng: new kakao.maps.LatLng(37.39124205567942, 126.97296865595483),
      img: pepsi,
    },
    {
      id: 4,
      title: '내손 의왕 스타벅스',
      latlng: new kakao.maps.LatLng(37.38903279939199, 126.97623476944985),
      img: coca,
    },
    {
      id: 5,
      title: '범계 베스킨라빈스',
      latlng: new kakao.maps.LatLng(37.39050367826452, 126.95222998928415),
      img: coca,
    },
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
          {positions.map((item) => {
            return (
              <SlideMainWrapper key={item.id} onClick={() => selectInfo(item.id, item.title)}>
                <SlideImgWrapper>
                  <img src={item.img} />
                </SlideImgWrapper>
                <SlideName>{item.title}</SlideName>
              </SlideMainWrapper>
            );
          })}
        </MySlider>
      </SlideWrapper>
    </>
  );
}
