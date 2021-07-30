import markerImg from 'apis/license/marker.png';
// useGetSearchData를 바탕으로 검색된 데이터를 지도에 표시하기 위한 함수

var { kakao } = window;

export function useKeyword(searchValue) {
  // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  var container = document.getElementById('Map'); // 가이드는 Map이다
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 2,
  };
  var map = new kakao.maps.Map(container, options);

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
        /* 지명이 정확하지 않을 경우 배열 가장 첫 번째 데이터를 마커로 표시 */
        displayMarker(data[0]);
        bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    } else {
      return;
    }
  }

  /* 마커를 키워드로 검색 시에는 못 움직이게 하는 것은 어떤지?*/
  function setDraggable(draggable) {
    // 마우스 드래그로 지도 이동 가능여부를 설정합니다
    map.setDraggable(draggable);
  }

  setDraggable(false);

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place) {
    // 마커를 생성하고 지도에 표

    var markerImageUrl = markerImg;
    var markerImageSize = new kakao.maps.Size(25, 35); // 마커 이미지의 크기

    // 마커 이미지를 생성한다
    var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize);

    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
      image: markerImage,
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;font-weight:bold;display:flex;justify-content:center;align-items:center;">' +
          place.place_name +
          '</div>',
      );
      infowindow.open(map, marker);
    });

    kakao.maps.event.addListener(marker, 'click', () => {
      if (place.place_name && place.id) {
        console.log('place_name:', place.place_name);
        return (location.href = `store/${place.place_name}/${place.id}`);
      } else {
        console.log('이동 불가능한 마커입니다 \nmaker:', marker);
      }
    });
  }
  return { setDraggable };
}
