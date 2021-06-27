import { ApplyItemWrapper } from './style';
import { Card } from 'antd';

const ApplyItem = ({ pk, storeName, category }) => {
  return (
    <Card title={pk} style={{ margin: 20 }}>
      <p>
        <b>{storeName}</b>는 <b>{category}</b>(을/를) 팔고 있습니다
      </p>
    </Card>
  );
};

export default ApplyItem;
