import { Link } from 'react-router-dom';
import { CustomSettingOutlined, CustomUserAddOutlined, UserInfoWrapper, UserInfoWrapperMain } from './style';

const UserInfoBar = ({ myInfo, setLoginModal }) => {
  // console.log('myInfo', myInfo);
  return (
    <UserInfoWrapper>
      <UserInfoWrapperMain>
        {myInfo ? <span title="UserName">{myInfo.myNickname}</span> : <span>로그인이 필요합니다</span>}
        {myInfo ? (
          <Link to={'/personal/setting'}>
            <CustomSettingOutlined />
          </Link>
        ) : (
          <CustomUserAddOutlined onClick={setLoginModal} />
        )}
      </UserInfoWrapperMain>
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
