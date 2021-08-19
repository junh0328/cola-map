export const calCategory = (reviewList) => {
  let pepsiArr = [];
  let cocaArr = [];

  reviewList.map((r) => {
    if (r.drink === 'pepsi') {
      pepsiArr.push(r.drink);
    } else if (r.drink === 'coca') {
      cocaArr.push(r.drink);
    }
  });
  return Math.floor((pepsiArr.length / reviewList.length) * 100);
};
