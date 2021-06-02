import { useSelector } from 'react-redux';
import { PersonalWrapper } from './style';
import UserInfoBar from '../../components/UserInfoBar';

const Personal = () => {
  const { isPersonalOption } = useSelector((state) => {
    return {
      isPersonalOption: state.personal.isPersonalOption,
    };
  });

  return (
    <PersonalWrapper>
      <UserInfoBar />
    </PersonalWrapper>
  );
};

export default Personal;
