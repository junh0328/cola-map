import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AddressViewer } from './style';

const AddressView = () => {
  const { result, status } = useSelector((state) => state.map.address);

  return (
    <AddressViewer>
      <b>{result && status === 'OK' ? result.address.address_name : `-`}</b>
    </AddressViewer>
  );
};

export default AddressView;
