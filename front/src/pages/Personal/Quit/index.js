import CommonLayout from 'components/CommonLayout';
import PersonalHeader from 'components/PersonalHeader';

const Quit = () => {
  return (
    <CommonLayout>
      <PersonalHeader title="탈퇴하기" />
      <p>여기는 탈퇴 안내 메시지</p>
      <button>탈퇴하기</button>
    </CommonLayout>
  );
};

export default Quit;
