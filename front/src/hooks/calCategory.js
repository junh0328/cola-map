export const calCategory = (reviewList) => {
  // 펩시 개수, 콜라 개수
  let pepsiArr = [];
  let cocaArr = [];

  reviewList.map((r) => {
    if (r.category === '펩시') {
      pepsiArr.push(r.category);
    } else if (r.category === '코카콜라') {
      cocaArr.push(r.category);
    }
  });
  return Math.floor((pepsiArr.length / reviewList.length) * 100);
};
