// src/App.jsx
import { useState } from 'react';
import './index.css';
import LiveTracking from './components/LiveTracking';

function App() {
  const [phone, setPhone] = useState('');
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (phone.trim() === '') {
      alert('Please enter your phone number');
      return;
    }
    setStarted(true);
  };

  const handleReset = () => {
    setStarted(false);
    setPhone('');
  };

  return (
    <div className="container">
      <h2>Employee Live Tracking Demo</h2>
      {!started ? (
        <div>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <button onClick={handleStart}>Start Tracking</button>
        </div>
      ) : (
        <div>
          <LiveTracking phoneNumber={phone} onReset={handleReset} />
        </div>
      )}
    </div>
  );
}

export default App;
