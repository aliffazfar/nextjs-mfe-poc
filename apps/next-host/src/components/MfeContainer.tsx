'use client';

import React, { useEffect } from 'react';

const MfeContainer = () => {
  useEffect(() => {
    console.log('MfeContainer: useEffect triggered.');
    const scriptId = 'next-mfe-script';
    
    // Avoid adding the script multiple times
    if (document.getElementById(scriptId)) {
      console.log('MfeContainer: Script already exists.');
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'http://localhost:3002/widget.js';
    script.async = true;
    
    script.onload = () => {
      console.log('MfeContainer: Script loaded successfully.');
    };
    
    script.onerror = () => {
      console.error('MfeContainer: Failed to load script.');
    };

    document.body.appendChild(script);
    console.log('MfeContainer: Script appended to body.');

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
        console.log('MfeContainer: Script removed on cleanup.');
      }
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Micro-Frontend</h2>
      <div id="next-mfe-root" style={{ border: '2px dashed #ccc', padding: '1em', minHeight: '100px' }}>
        {/* This div is the target for the MFE */}
      </div>
    </div>
  );
};

export default MfeContainer;