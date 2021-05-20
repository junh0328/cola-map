// import { useDisplayMark } from './useDisplayMark';

const { kakao } = window;

// 마크를 표시하는 함수 분리
// const { displayMarker } = useDisplayMark();

export default function useFetchingMap() {
  //console.log(`useFetchingMap`);
  const container = document.getElementById('Map'); // 가이드는 Map이다
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  kakao.maps.event.addListener(map, 'dragend', () => console.log(123));

  //console.log('map', map);
  return { map };
}
