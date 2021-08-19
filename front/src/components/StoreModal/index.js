import { CloseOutlined } from '@ant-design/icons';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FormApplyWrap,
  FormContentWrap,
  MyBtn,
  StoreModalBackground,
  StoreModalHeader,
  StoreModalHeaderBtn,
  StoreModalHeaderMain,
  StoreModalHeaderSub,
  StoreModalMain,
  StoreModalWrap,
} from './style';

const StoreModal = (props) => {
  const { onClose, title, id } = props;
  const [report, setReport] = useState('');
  const BtnStyle = useMemo(
    () => ({
      cursor: 'pointer',
      fontSize: '1rem',
      padding: '5px',
      borderRadius: '50%',
      border: '1px solid gray',
    }),
    [],
  );

  const handleClickButton = useCallback((value) => {
    setReport(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      alert(`report: \n가게 명: ${title}, \n가게 아이디: ${id}, \n신고 내용: ${report}`);
      onClose();
    },
    [report],
  );

  return (
    <StoreModalBackground>
      <StoreModalWrap>
        <StoreModalMain>
          <StoreModalHeader>
            <StoreModalHeaderBtn>
              <CloseOutlined style={BtnStyle} onClick={onClose} />
            </StoreModalHeaderBtn>
            <StoreModalHeaderMain>삭제요청 하시는 이유가 궁금해요!</StoreModalHeaderMain>
            <StoreModalHeaderSub> 3건 이상의 요청이 들어오면 자동 삭제됩니다.</StoreModalHeaderSub>
          </StoreModalHeader>
          <form onSubmit={onSubmit}>
            <FormContentWrap>
              <MyBtn onClick={() => handleClickButton('없어진 가게에요')} readOnly value="없어진 가게에요"></MyBtn>
              <MyBtn
                onClick={() => handleClickButton('부적절한 내용이 있어요')}
                readOnly
                value="부적절한 내용이 있어요"
              ></MyBtn>
              <MyBtn
                onClick={() => handleClickButton('중복 제보된 가게에요')}
                readOnly
                value="중복 제보된 가게에요"
              ></MyBtn>
            </FormContentWrap>
            <FormApplyWrap>
              <button>신고하기</button>
            </FormApplyWrap>
          </form>
        </StoreModalMain>
      </StoreModalWrap>
    </StoreModalBackground>
  );
};

export default StoreModal;
