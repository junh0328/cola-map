import { Card, Row, Col } from 'antd';
import CommonLayout from 'components/CommonLayout';
import PersonalHeader from 'components/PersonalHeader';

const MyReview = () => {
  return (
    <CommonLayout>
      <PersonalHeader title="내가 쓴 리뷰" />
      {/* 추후 공통 리뷰 컴포넌트 생성 후 추가 예정 */}
      <Row gutter={[10, 10]} style={{ padding: '2em' }}>
        <Col style={{ width: '100%' }}>
          <Card title="가게이름1" extra={<a href="#">More</a>}>
            <p>리뷰내용</p>
          </Card>
        </Col>
        <Col style={{ width: '100%' }}>
          <Card title="가게이름2" extra={<a href="#">More</a>}>
            <p>리뷰내용</p>
          </Card>
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default MyReview;
