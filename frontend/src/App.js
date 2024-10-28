import React, { useState } from 'react';
import axios from 'axios';
import PredictionTable from './components/PredictionTable';
import './App.css'; 

function App() {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [accuracy, setAccuracy] = useState(null);
  const [XTestData, setXTestData] = useState([]); // State to store X_test data

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setPredictions(response.data.predictions);
      setAccuracy(response.data.accuracy);
      setXTestData(response.data.X_test);  
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="app">
      <h1>ML Predictions</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Predict</button>
      {accuracy !== null && <p>Accuracy: {accuracy.toFixed(2)}%</p>}
      {predictions.length > 0 && <PredictionTable predictions={predictions} XTestData={XTestData} />}
    </div>
  );
}

export default App;
