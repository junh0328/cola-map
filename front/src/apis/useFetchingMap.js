import { useGetMyLoc } from './useGetMyLoc';

const { kakao } = window;

export default function useFetchingMap() {
<<<<<<< HEAD
  //console.log(`useFetchingMap`);
=======
  // console.log(`useFetchingMap`);
>>>>>>> c2c25517674f9e67df9cdd3ee8a8557617db761a
  const container = document.getElementById('Map'); // 가이드는 Map이다
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  useGetMyLoc();

  return { map };
}
