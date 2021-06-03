import { useGetMyLoc } from 'apis/useGetMyLoc';

const { kakao } = window;

export default function useFetchingMap() {
  // console.log(`useFetchingMap`);
  const container = document.getElementById('Map'); // 가이드는 Map이다
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  useGetMyLoc();

  return { map };
}
