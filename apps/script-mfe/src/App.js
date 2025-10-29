import React from 'react';

const App = () => {
  return (
    <div style={{ padding: '1em', backgroundColor: '#eef', border: '1px solid #00f' }}>
      <h2>Hello from the Script MFE!</h2>
      <p>This React component was rendered from <code>main.js</code> served by <code>localhost:8081</code>.</p>
      <button onClick={() => alert('Button clicked in MFE!')}>
        Click me
      </button>
    </div>
  );
};

export default App;