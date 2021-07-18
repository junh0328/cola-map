import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';
import marker from 'apis/license/marker.png';

const { kakao } = window;

export function useGetMyLoc() {
  // console.log(`useGetMYLoc`);
  const container = document.getElementById('Map'); // 가이드는 Map이다
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 4,
  };
  const map = new kakao.maps.Map(container, options);

  // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

      if (locPosition) {
        positions[0].latlng = locPosition;
      }
      displayMarker(positions);
    });
  } else {
    let locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    displayMarker(locPosition);
  }

  function displayMarker(positions) {
    // console.log('positions 배열 출력:', positions);
    for (var i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(25, 35);

      // 마커 이미지를 위한 변수
      let markerImage;

      // 마커 이미지가 있을 경우에만 표시
      if (positions[i].img) {
        markerImage = new kakao.maps.MarkerImage(positions[i].img, imageSize);
      } else {
        markerImage = null;
      }

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map,
        title: positions[i].title,
        position: positions[i].latlng,
        image: markerImage,
      });

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(positions[0].latlng, marker);

      // console.log(marker);

      kakao.maps.event.addListener(marker, 'click', () => {
        console.log('maker:', marker);
        // if (marker.Fb !== '내 위치') {
        //   return (location.href = `/store/${marker.Fb}`);
        // }
      });
    }
  }

  // 더미데이터이기 때문에 useGetMyLoc 함수 내에 적용하였습니다
  const positions = [
    {
      id: 1,
      title: '내 위치',
      latlng: null,
      img: marker,
    },
    // {
    //   id: 2,
    //   title: '메가커피 의왕내손점',
    //   latlng: new kakao.maps.LatLng(37.38992745536002, 126.97743015243483),
    //   img: coca,
    //   storeId: 940929140,
    // },
  ];
  return { map };
}
