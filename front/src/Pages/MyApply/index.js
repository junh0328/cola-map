import CommonLayout from '../../components/CommonLayout';
import PersonalHeader from '../../components/PersonalHeader';
import ApplyItem from '../../components/ApplyItem';

const tmpStoreData = [
  {
    pk: 0,
    storeName: 'bhc',
  },
  {
    pk: 1,
    storeName: 'bbq',
  },
  {
    pk: 2,
    storeName: '푸라닭',
  },
  {
    pk: 3,
    storeName: '엽기떡볶이',
  },
];

const MyApply = () => {
  return (
    <CommonLayout>
      {/* 추후 공통 가게 컴포넌트 생성 후 변경 예정 */}
      <PersonalHeader title="내가 제보한 가게" />
      {tmpStoreData && tmpStoreData.map((data, idx) => <ApplyItem key={data.pk} {...data} />)}
    </CommonLayout>
  );
};

export default MyApply;
