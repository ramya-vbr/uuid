import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UUIDGenerator = () => {
  const [uuids, setUuids] = useState([]);

  const generateUUIDs = () => {
    const newUuids = Array.from({ length: 1 }, () => uuidv4());
    setUuids(newUuids);
  };

  return (
    <div className="container">
      <button onClick={generateUUIDs}>Generate UUIDs</button>
      <ul>
        {uuids.map((uuid, index) => (
          <li key={index}>{uuid}</li>
        ))}
      </ul>
    </div>
  );
};
export default UUIDGenerator;