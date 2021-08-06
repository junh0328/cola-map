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
      {/* postData 안에 들어있는 유저의 정보(_id)와 내 로컬스토리지에 들어있는 (_id)가 같을 경우에만 editMode에서 수정 및 취소 버튼이 보이도록 */}
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
