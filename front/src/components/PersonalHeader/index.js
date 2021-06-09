import { Link, useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { PersonalHeaderWrapper } from './style';

const PersonalHeader = ({ title }) => {
  const history = useHistory();
  return (
    <PersonalHeaderWrapper>
      <LeftOutlined onClick={() => history.goBack()} style={{ cursor: 'pointer' }} />
      <h1>{title}</h1>
    </PersonalHeaderWrapper>
  );
};

PersonalHeader.propTypes = {
  title: PropTypes.string,
};

export default PersonalHeader;
