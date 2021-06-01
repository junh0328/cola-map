const { kakao } = window;

/* 
onChange()를 통해서 감지되는 e.targeet.value에 대해 지속적인 결과값을 보여준다.
지도에 표시할 필요는 없고, 리스트만 뽑아오면 된다.
일단 콘솔창에 띄워보고 결과값이 제대로 넘어온다면, 이를 SearchModal 컴포넌트에 적용해야 함
*/

// 'bhc 내손 흥안' 을 검색합니다.

export function getList(searchValue) {
  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();
  // console.log('ps 변화 출력: ', ps);

  // 키워드 검색을 요청하는 함수입니다
  console.log('키워드 요청 결과: ', ps.keywordSearch(searchValue, placesSearchCB));

  // ps.keywordSearch(searchValue, placesSearchCB);

  /* 
  이런식으로 사용하고 싶어요
  let result = ps.keywordSearch(searchValue, placesSearchCB);
  console.log(result);
  */

  let searchArray = [];
  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  async function placesSearchCB(data, status) {
    console.log(searchValue); // 사용자의 입력값을 확인하기 위함
    try {
      if (status === kakao.maps.services.Status.OK) {
        console.log('검색 결과 값 출력: ', data);
        searchArray = await data;
        if (searchArray) {
          console.log('스코프 내부 :', searchArray);
        }
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    } catch (error) {
      console.log(error);
    }
    console.log('스코프 외부 : ', searchArray); // 리턴 하기전 마지막 확인
    return searchArray; //placesSearchCB 결과 값을 return
  }
  // console.log('placesSearchCB: ', placesSearchCB()); // 빈 배열로 넘어옴 왜 why?
}

/*
getList(searchValue) 의 결과 값을 담아 해당 배열을 SearchInput 컴포넌트에서 사용하고 싶은 상태
placesSearchCB() 함수에서 결과 값인 data를 출력시에 정상으로 넘어옴 (배열 형식)
이런식으로 사용하고 싶어요 주석처럼 쓰고 싶으나 undefined 반환 🥲
리턴이 안되는 것 같음
*/
