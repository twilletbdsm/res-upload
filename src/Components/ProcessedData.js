import React from 'react';

const ProcessedData = ({ data }) => {
  return (
    <div>
      <h2>Processed Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProcessedData;
