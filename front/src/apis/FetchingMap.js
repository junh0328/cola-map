const { kakao } = window;

export default function FetchingMap() {
  window.onload = function () {
    const container = document.getElementById('Map');
    const options = {
      center: new kakao.maps.LatLng(37.40209297146093, 127.1086502555068), // 카카오 판교 오피스 주소
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  };
}
