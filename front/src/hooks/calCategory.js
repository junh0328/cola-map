export const calCategory = (reviewList) => {
  // 펩시 개수, 콜라 개수
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

/*
기존 dummy json
{
  id: 1,
  storeName: '헤반트 범계점',
  userName: '윤성님',
  comment: '존맛탱 가게입니다 추천해요',
  category: '펩시',
},
*/

/*
서버로 부터 전달 받는 json
comment: "소담촌 평촌 직영점은 펩시를 제공합니다."
drink: "pepsi"
user:
profileImage: "http://k.kakaocdn.net/dn/ccdh12/btq9gz8Y5Bg/kC1F5v6y5kBAmUHI4AcHok/img_640x640.jpg"
profileNickname: "이준희"
*/
