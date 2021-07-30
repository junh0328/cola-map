import { useGetMyLoc } from 'apis/useGetMyLoc';

var { kakao } = window;

export default function useFetchingMap() {
  // console.log(`useFetchingMap`);
  var container = document.getElementById('Map'); // 가이드는 Map이다
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  var map = new kakao.maps.Map(container, options);

  useGetMyLoc();

  return { map };
}
