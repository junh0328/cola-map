import { Link } from 'react-router-dom';
import { CustomSettingOutlined, UserInfoWrapper, UserInfoWrapperMain } from './style';

const UserInfoBar = ({ myInfo, setLoginModal }) => {
  // console.log('myInfo', myInfo);
  return (
    <UserInfoWrapper>
      <UserInfoWrapperMain onClick={setLoginModal}>
        {myInfo ? <span title="UserName">{myInfo.myNickname}</span> : <span>로그인이 필요합니다</span>}
        {myInfo ? (
          <Link to={'/personal/setting'}>
            <CustomSettingOutlined />
          </Link>
        ) : (
          <CustomSettingOutlined />
        )}
      </UserInfoWrapperMain>
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
