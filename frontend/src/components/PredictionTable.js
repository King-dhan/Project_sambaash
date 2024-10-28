import React from 'react';

function PredictionTable({ predictions, XTestData }) {
  if (!XTestData || !predictions || XTestData.length === 0 || predictions.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr>
          {Object.keys(XTestData[0]).map((feature, index) => (
            <th key={index} style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f4f4f4' }}>
              {feature}
            </th>
          ))}
          <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f4f4f4' }}>Prediction</th>
        </tr>
      </thead>
      <tbody>
        {predictions.map((prediction, index) => (
          <tr key={index}>
            {Object.values(XTestData[index]).map((value, idx) => (
              <td key={idx} style={{ border: '1px solid black', padding: '8px' }}>{value}</td>
            ))}
            <td style={{ border: '1px solid black', padding: '8px' }}>{prediction}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PredictionTable;
