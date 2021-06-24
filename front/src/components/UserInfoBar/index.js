import { Link } from 'react-router-dom';
import { UserInfoWrapper, UserInfoWrapperMain } from './style';
import { SettingOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

const UserInfoBar = () => {
  const style = useMemo(() => ({ cursor: 'pointer', position: 'absolute', right: '3%' }), []);

  return (
    <UserInfoWrapper>
      <UserInfoWrapperMain>
        <span title="UserName">홍길동</span>
        <Link to={'/personal/setting'}>
          <SettingOutlined style={style} title="로그아웃" />
        </Link>
      </UserInfoWrapperMain>
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
