import CommonLayout from 'components/CommonLayout';
import PersonalHeader from 'components/PersonalHeader';

const MyReview = () => {
  return (
    <CommonLayout>
      <PersonalHeader title="내가 쓴 리뷰" />
      {/* 추후 공통 리뷰 컴포넌트 생성 후 추가 예정 */}
    </CommonLayout>
  );
};

export default MyReview;
