// const { kakao } = window;

// export function displayMarker(positions) {
//   const container = document.getElementById('Map'); // 가이드는 Map이다
//   const options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3,
//   };
//   const map = new kakao.maps.Map(container, options);

//   // console.log('positions 배열 출력:', positions);
//   for (var i = 0; i < positions.length; i++) {
//     const imageSize = new kakao.maps.Size(40, 60);

//     // 마커 이미지를 위한 변수
//     let markerImage;

//     // 마커 이미지가 있을 경우에만 표시
//     if (positions[i].img) {
//       markerImage = new kakao.maps.MarkerImage(positions[i].img, imageSize);
//     } else {
//       markerImage = null;
//     }

//     // 마커를 생성합니다
//     let marker = new kakao.maps.Marker({
//       map: map,
//       title: positions[i].title,
//       position: positions[i].latlng,
//       image: markerImage,
//     });

//     // 지도 중심좌표를 접속위치로 변경합니다
//     map.setCenter(positions[0].latlng, marker);

//     // console.log(marker);

//     kakao.maps.event.addListener(marker, 'click', () => {
//       console.log('maker:', marker);
//       console.log('marker.Fb:', marker.Fb);
//       if (marker.Fb !== '내 위치') {
//         return (location.href = `/store/${marker.Fb}`);
//       }
//     });
//   }
// }
