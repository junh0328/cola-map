import { AimOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

// 전체를 감싸는 부분
export const SearchModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 0; */
  top: ${(props) => (props.show === 'true' ? '0' : '120%')};
  z-index: 10001;
  background-color: #fff;
  padding-top: 8%;
  transition: 0.5s;
`;

// 나가기 버튼을 포함한 헤더
export const SearchModalHeader = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  display: flex;
  margin: 0 8%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CloseModalButton = styled.div`
  position: absolute;
  left: 6%;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SearchModalMain = styled.div`
  background-color: #f1f1f1;
  margin-top: 4%;
  padding: 4% 0;

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 60%;
  padding: 15px;
`;

export const SearchModalInput = styled.input`
  margin-left: 2%;
  width: 80%;
  border: none;
  font-size: 0.9rem;
  font-weight: bolder;

  :focus {
    outline: none;
  }
`;
export const CloseModalWrapper = styled.div``;

export const AimButtonWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  margin-left: 3%;
  padding: 2%;
  font-size: 1.3rem;
  background-color: white;
  color: #0f4c82;
  /* border: 1px solid black; */
`;

export const CustonAimBtn = styled(AimOutlined)``;
