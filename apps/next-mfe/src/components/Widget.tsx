'use client';


const Widget = () => {
  return (
    <div style={{ padding: '1em', backgroundColor: 'white', border: '1px solid black', color: 'black' }}>
      <h2>Hello from the Next.js MFE!</h2>
      <p>This React component was rendered from a Next.js app.</p>
      <button onClick={() => alert('Button clicked in Next.js MFE!')}>
        Click me
      </button>
    </div>
  );
};

export default Widget;