import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [message, setMessage] = useState('Waiting...');

  useEffect(() => {
    fetch('http://localhost:4000/api/hello')
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage('Error contacting server'));
  }, []);

  return <h1>{message}</h1>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
