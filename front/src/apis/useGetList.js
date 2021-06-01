const { kakao } = window;

/* 
onChange()를 통해서 감지되는 e.targeet.value에 대해 지속적인 결과값을 보여준다.
지도에 표시할 필요는 없고, 리스트만 뽑아오면 된다.
일단 콘솔창에 띄워보고 결과값이 제대로 넘어온다면, 이를 SearchModal 컴포넌트에 적용해야 함
*/
export function getList(searchValue) {
  console.log('getList Start!');
  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();

  // 키워드로 장소를 검색합니다
  searchPlaces(searchValue);

  // 키워드 검색을 요청하는 함수입니다
  function searchPlaces(searchValue) {
    var keyword = searchValue;

    // if (!keyword.replace(/^\s+|\s+$/g, '')) {
    //   alert('키워드를 입력해주세요!');
    //   return false;
    // }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword, placesSearchCB);
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  function placesSearchCB(data, status) {
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      console.log(data);

      // displayPlaces(data);

      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
      // } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      //   alert('검색 결과가 존재하지 않습니다.');
      //   return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      return;
    }
  }

  // 검색 결과 목록과 마커를 표출하는 함수입니다
  // function displayPlaces(places) {
  //   var listEl = document.getElementById('placesList'),
  //     menuEl = document.getElementById('menu_wrap'),
  //     fragment = document.createDocumentFragment(),
  //     bounds = new kakao.maps.LatLngBounds(),
  //     listStr = '';

  //   // 검색 결과 목록에 추가된 항목들을 제거합니다
  //   removeAllChildNods(listEl);

  //   // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
  //   listEl.appendChild(fragment);
  //   menuEl.scrollTop = 0;
  // }

  // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  // function displayPagination(pagination) {
  //   var paginationEl = document.getElementById('pagination'),
  //     fragment = document.createDocumentFragment(),
  //     i;

  //   // 기존에 추가된 페이지번호를 삭제합니다
  //   while (paginationEl.hasChildNodes()) {
  //     paginationEl.removeChild(paginationEl.lastChild);
  //   }

  //   for (i = 1; i <= pagination.last; i++) {
  //     var el = document.createElement('a');
  //     el.href = '#';
  //     el.innerHTML = i;

  //     if (i === pagination.current) {
  //       el.className = 'on';
  //     } else {
  //       el.onclick = (function (i) {
  //         return function () {
  //           pagination.gotoPage(i);
  //         };
  //       })(i);
  //     }

  //     fragment.appendChild(el);
  //   }
  //   paginationEl.appendChild(fragment);
  // }
}
