// useGetSearchData를 바탕으로 검색된 데이터를 지도에 표시하기 위한 함수

const { kakao } = window;

export default function useKeyword(searchValue) {
  // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  const container = document.getElementById('Map'); // 가이드는 Map이다
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 2,
  };
  const map = new kakao.maps.Map(container, options);

  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();

  // 키워드로 장소를 검색합니다
  ps.keywordSearch(searchValue, placesSearchCB);

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      var bounds = new kakao.maps.LatLngBounds();

      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        // 데이터 결과물을 확인하기 위한 로그
        console.log('useKeyword, 내부 결과 출력:', data[0]);
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    } else {
      return;
    }
  }

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    console.log('useKeyword, marker 출력: ', marker);

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다

      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;font-weight:bold;display:flex;justify-content:center;align-items:center;">' +
          place.place_name +
          '</div>',
      );
      infowindow.open(map, marker);
    });
  }
}
