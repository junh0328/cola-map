import React, { useCallback, useState } from 'react';
import pepsi from 'apis/license/pepsi.png';
import coca from 'apis/license/coca.png';
import { Input } from 'antd';
import { UpdateBtnWrapper } from './style';

const { TextArea } = Input;

const CardMetaContent = (props) => {
  const { postData, editMode, onCancelUpdate, onChangePost, myInfo } = props;

  const [editText, setEditText] = useState(postData.comment);

  const onChangeText = useCallback((e) => {
    setEditText(e.target.value);
  }, []);

  const onCancelText = useCallback(() => {
    onCancelUpdate();
    setEditText(editText);
  }, []);

  return (
    <div>
      {editMode && postData.user._id === myInfo.myId ? (
        <>
          <TextArea
            width="200"
            style={{ border: 'none', background: 'inherit', padding: 0 }}
            value={editText}
            onChange={onChangeText}
          />
          <UpdateBtnWrapper>
            <button onClick={onChangePost(editText, postData._id, postData.drink)}>수정하기</button>
            <button onClick={onCancelText}>취소하기</button>
          </UpdateBtnWrapper>
        </>
      ) : (
        <>
          <p>{postData.comment}</p>
          <p>{postData.drink === 'pepsi' ? <img src={pepsi} /> : <img src={coca} />}</p>
        </>
      )}
    </div>
  );
};

export default CardMetaContent;
