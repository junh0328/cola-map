export default function useCatchCurrent() {
  function consoleIt() {
    const x = document.getElementsByClassName('.slick-current');
    if (x) {
      console.log('x가 있습니다', x);
    } else {
      console.log('x가 없습니다');
    }
  }
  return { consoleIt };
}
