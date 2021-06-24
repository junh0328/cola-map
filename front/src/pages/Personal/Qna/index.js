import CommonLayout from 'components/CommonLayout';
import PersonalHeader from 'components/PersonalHeader';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

const tmpFaqData = [
  {
    pk: 0,
    title: '질문1',
    answer: '답변1',
  },
  {
    pk: 1,
    title: '질문2',
    answer: '답변2',
  },
];

const Qna = () => {
  const { Panel } = Collapse;
  return (
    <CommonLayout>
      <PersonalHeader title="자주 묻는 질문" />
      <Collapse>
        {tmpFaqData &&
          tmpFaqData.map((data, idx) => (
            <Panel header={data.title} key={data.pk}>
              <p>{data.answer}</p>
            </Panel>
          ))}
      </Collapse>
    </CommonLayout>
  );
};

export default Qna;
