import { UserInfoWrapper } from './style';
import { LogoutOutlined } from '@ant-design/icons';

const UserInfoBar = () => {
  return (
    <UserInfoWrapper>
      <b title="UserName">UserName</b>
      <LogoutOutlined style={{ cursor: 'pointer' }} title="로그아웃" />
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
