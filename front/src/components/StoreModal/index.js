import { CloseOutlined } from '@ant-design/icons';
import React, { useCallback, useMemo } from 'react';
import {
  FormApplyWrap,
  FormContentWrap,
  StoreModalBackground,
  StoreModalHeader,
  StoreModalHeaderBtn,
  StoreModalHeaderMain,
  StoreModalHeaderSub,
  StoreModalMain,
  StoreModalWrap,
} from './style';

const StoreModal = (props) => {
  const { onClose } = props;
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

  const onClick = useCallback((e) => {
    e.preventDefault();
  }, []);

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
          <form>
            <FormContentWrap>
              <button onClick={onClick}>없어진 가게에요.</button>
              <button onClick={onClick}>부적절한 내용이 있어요.</button>
              <button onClick={onClick}>중복 제보된 가게에요.</button>
            </FormContentWrap>
            <FormApplyWrap>
              <button onClick={onClick}>신고하기</button>
            </FormApplyWrap>
          </form>
        </StoreModalMain>
      </StoreModalWrap>
    </StoreModalBackground>
  );
};

export default StoreModal;
