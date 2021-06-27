import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const Immsi = () => {
  const [storeArray, setStoreArray] = useState([]);
  const getStore = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get('http://localhost:5000/store');
      const result = response.data.Stores;
      setStoreArray(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('storeArray 감지 : ', storeArray);
  }, [storeArray]);

  return (
    <div style={{ background: 'white', height: '100vh' }}>
      <h1>임시 페이지입니다</h1>
      <button style={{ marginBottom: 10 }} onClick={getStore}>
        불러오기
      </button>
      {storeArray &&
        storeArray.map((store) => (
          <div
            key={store._id}
            style={{
              padding: '10px',
              border: '1px solid black',
              display: 'flex',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
              {store.storeName}, {store.mostPosted ? store.mostPosted : store.category}, 위도 경도:{store.latitude},
              {store.longitude}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Immsi;
