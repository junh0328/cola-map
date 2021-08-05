import React from 'react';
import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';

const CardMetaContent = (props) => {
  const { postData } = props;
  return (
    <div>
      <p>{postData.comment}</p>
      <p>{postData.drink === 'pepsi' ? <img src={pepsi} /> : <img src={coca} />}</p>
    </div>
  );
};

export default CardMetaContent;
