import { MySlider, SlideImgWrapper, SlideMainWrapper, SlideName, SlideWrapper } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AimButton from 'components/AimButtonn';
import SearchInput from 'components/SearchInput';
import Map from 'components/Map';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ApplyButton from 'components/ApplyButton';
import { positions } from 'apis/dummy/reviewList';
import { useEffect } from 'react';

export default function Main() {
  // 검색 결과를 담을 initialState
  const { searchAddress, serachAddressDone } = useSelector((state) => state.map);

  // me가 생기려면 로그인 과정을 거쳐야 합니다.
  const { me } = useSelector((state) => state.personal);

  useEffect(() => {
    if (me) {
      console.log('me 정보를 확인합니다', me);
      if (me?.token) {
        console.log('token을 로컬 스토리지에 저장합니다.');
        localStorage.setItem('token', me.token);
        localStorage.setItem('uniqId', me.user.uniqId);
        localStorage.setItem('nickname', me.user.profile_nickname);
      }
    }
  }, [me]);

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
      {positions.length && (
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
      )}
    </>
  );
}
