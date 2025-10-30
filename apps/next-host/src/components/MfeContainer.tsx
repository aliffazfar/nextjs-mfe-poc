'use client';

import React, { useEffect } from 'react';

const MfeContainer = () => {
  useEffect(() => {
    const scriptId = 'next-mfe-script';

    const loadWidget = async () => {
      try {
        console.log('MfeContainer: Fetching manifest...');
        const response = await fetch('http://localhost:3002/manifest.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.statusText}`);
        }
        const manifest = await response.json();
        const widgetInfo = manifest['widget.js'];

        if (!widgetInfo) {
          throw new Error('Widget info not found in manifest.');
        }

        console.log('MfeContainer: Manifest loaded:', widgetInfo);

        // Avoid adding the script multiple times
        if (document.getElementById(scriptId)) {
          console.log('MfeContainer: Script already exists.');
          return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = widgetInfo.src;
        script.integrity = widgetInfo.integrity;
        script.crossOrigin = 'anonymous';
        script.async = true;

        script.onload = () => {
          console.log('MfeContainer: Script loaded and verified successfully.');
        };

        script.onerror = () => {
          console.error('MfeContainer: Failed to load or verify script. Check integrity hash and script URL.');
        };

        document.body.appendChild(script);
        console.log('MfeContainer: Script appended to body.');
      } catch (error) {
        console.error('MfeContainer: Error loading widget.', error);
      }
    };

    loadWidget();

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