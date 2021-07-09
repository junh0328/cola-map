import React, { useCallback, useEffect, useState } from 'react';
import { AimButtonWrapper, CustomBtn } from './style';

const ApplyButton = (props) => {
  const { data } = props;
  const [storeData, setDate] = useState([]);

  useEffect(() => {
    if (data) {
      console.log('data: ', data);
      let whatIwant = [];
      whatIwant.push(data.id, data.place_name, data.x, data.y);
      setDate(whatIwant);
    }
  }, [data]);

  const alertData = useCallback(() => {
    if (data) alert(data.place_name);
    else return;
  });

  return (
    <AimButtonWrapper>
      <CustomBtn onClick={alertData} />
    </AimButtonWrapper>
  );
};

export default ApplyButton;
