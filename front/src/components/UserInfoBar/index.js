import { Link } from 'react-router-dom';
import { CustomSettingOutlined, UserInfoWrapper, UserInfoWrapperMain } from './style';

import { useMemo } from 'react';

const UserInfoBar = () => {
  return (
    <UserInfoWrapper>
      <UserInfoWrapperMain>
        <span title="UserName">홍길동</span>
        <Link to={'/personal/setting'}>
          <CustomSettingOutlined />
        </Link>
      </UserInfoWrapperMain>
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
