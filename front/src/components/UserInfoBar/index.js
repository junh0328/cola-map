import { UserInfoWrapper, UserInfoWrapperMain } from './style';
import { LogoutOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

const UserInfoBar = () => {
  const style = useMemo(() => ({ cursor: 'pointer', position: 'absolute', right: '3%' }), []);

  return (
    <UserInfoWrapper>
      <UserInfoWrapperMain>
        <span title="UserName">홍길동</span>
        <LogoutOutlined style={style} title="로그아웃" onClick={() => alert('로그아웃 되었습니다!')} />
      </UserInfoWrapperMain>
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
