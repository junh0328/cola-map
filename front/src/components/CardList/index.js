import { CardWrap, MyCard } from 'pages/Personal/style';
import React from 'react';

const CardList = ({ myPosts }) => {
  return (
    <CardWrap>
      {myPosts.map((post) => (
        <div
          style={{ cursor: 'pointer' }}
          key={post._id}
          onClick={() => (location.href = `store/${post.store.storeName}/${post.store.kakaoId}`)}
        >
          <MyCard title={post.store.storeName}>
            <p>{post.comment}</p>
          </MyCard>
        </div>
      ))}
    </CardWrap>
  );
};

export default CardList;
