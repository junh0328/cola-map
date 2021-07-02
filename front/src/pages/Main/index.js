import { MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AimButton from 'components/AimButtonn';
import SearchInput from 'components/SearchInput';
import Map from 'components/Map';
import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ApplyButton from 'components/ApplyButton';

export default function Main() {
  // 검색 결과를 담을 initialState
  const { searchAddress, serachAddressDone } = useSelector((state) => state.map);

  const positions = [
    {
      id: 1,
      title: '내 위치',
      latlng: null,
    },
    {
      id: 2,
      title: '메가커피 의왕내손점',
      latlng: new kakao.maps.LatLng(37.38992745536002, 126.97743015243483),
      img: coca,
      storeId: 940929140,
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
      {serachAddressDone && <ApplyButton data={searchAddress} />}
      <AimButton />
      <SlideWrapper>
        <MySlider {...settings} style={{ height: '100%' }}>
          {positions.map((item) => {
            return (
              <SlideMainWrapper key={item.id}>
                <SlideImgWrapper>
                  <img src={item.img} />
                </SlideImgWrapper>
                {/* 내 위치가 1이 아닐 때만 NavLink로 이동 가능하도록 조건문을 줌 */}
                {item.id !== 1 ? (
                  <NavLink key={item.id} to={`/store/${item.title}/${item.storeId}`} style={{ color: 'white' }}>
                    <SlideName>{item.title}</SlideName>
                  </NavLink>
                ) : (
                  <SlideName>{item.title}</SlideName>
                )}
              </SlideMainWrapper>
            );
          })}
        </MySlider>
      </SlideWrapper>
    </>
  );
}
