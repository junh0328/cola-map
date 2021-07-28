import React, { useMemo } from 'react';
import { Result, Button } from 'antd';

const PageNotFound = () => {
  return (
    <Result
      style={{ border: '3px solid white', height: '100vh', background: '#fff' }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          style={{ width: 250, height: 80, fontSize: '1.5rem' }}
          type="primary"
          onClick={() => (location.href = '/')}
        >
          Back to Home
        </Button>
      }
    />
  );
};

export default PageNotFound;
