import styled from '@emotion/styled';

// 위치 조정

export const StoreModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100020;
`;

export const StoreModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StoreModalMain = styled.div`
  border-radius: 10%;
  padding: 40px;
  background: white;
`;

// 메인 글자 및 close button

export const StoreModalHeader = styled.div`
  margin-bottom: 10px;
  position: relative;
`;

export const StoreModalHeaderBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: black;
`;

export const StoreModalHeaderMain = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  width: 55%;
`;

export const StoreModalHeaderSub = styled.div`
  margin-bottom: 20px;
  color: gray;
`;

// form 태그 내부

export const FormContentWrap = styled.div`
  width: 100%;
`;

// 컴포넌트로 만들 상태여만 props가 전달된다.
export const MyBtn = styled.input`
  cursor: pointer;
  margin: 0 auto;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid gray;
  border-radius: 20px;
  background: white;
  outline: none;
  font-size: 1rem;

  &:focus {
    background-color: #0f4c82;
    color: white;
  }
`;

export const FormApplyWrap = styled.div`
  margin-top: 10px;
  & button {
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 20px;
    font-size: 1rem;

    &:hover {
      background-color: #0f4c82;
      color: white;
    }
  }
`;
