const { kakao } = window;

var ps = new kakao.maps.services.Places();

export function getSearchData(keyword) {
  return new Promise((resolve) => {
    ps.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data);
        resolve(data);
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    });
  });
}
