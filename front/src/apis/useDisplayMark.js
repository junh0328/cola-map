// 마크를 표시하는 함수 (카카오 제공 API)

export function useDisplayMark() {
  const { kakao } = window;

  // 지도에 마커와 인포윈도우를 표시하는 함수입니다
  function displayMarker(locPosition, message) {
    const container = document.getElementById('Map');
    const options = {
      center: new kakao.maps.LatLng(37.40209297146093, 127.1086502555068), // 카카오 판교 오피스 주소
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: locPosition,
    });

    var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);

    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
  }
  return { displayMarker };
}
