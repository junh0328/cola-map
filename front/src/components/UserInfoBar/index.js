import { useDispatch } from 'react-redux';
import { UserInfoWrapper } from './style';
import { SettingOutlined } from '@ant-design/icons';
import { togglePersonalOption } from '../../reducers/personal';

const UserInfoBar = () => {
  const dispatch = useDispatch();

  return (
    <UserInfoWrapper>
      <b>UserName</b>
      <SettingOutlined style={{ cursor: 'pointer' }} onClick={() => dispatch(togglePersonalOption())} />
    </UserInfoWrapper>
  );
};

export default UserInfoBar;
