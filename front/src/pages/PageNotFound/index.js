import React, { useMemo } from 'react';

const PageNotFound = () => {
  const style = useMemo(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }));
  return (
    <div style={style}>
      <h1>404 NOT FOUND</h1>
    </div>
  );
};

export default PageNotFound;
