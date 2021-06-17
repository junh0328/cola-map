// Search Input에서 onchange를 통해 검색된 결과물을 담는 함수

const { kakao } = window;

var ps = new kakao.maps.services.Places();

export function getSearchData(keyword) {
  try {
    return new Promise((resolve) => {
      ps.keywordSearch(keyword, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          console.log('getSearchData 결과물 출력:', data);
          resolve(data);
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}
