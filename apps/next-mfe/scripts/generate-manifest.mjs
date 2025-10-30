import fs from 'fs/promises';
import crypto from 'crypto';
import path from 'path';

const generateManifest = async () => {
  try {
    const widgetPath = path.resolve(process.cwd(), 'public/widget.js');
    const widgetContent = await fs.readFile(widgetPath);

    const hash = crypto.createHash('sha384').update(widgetContent).digest('base64');

    const manifest = {
      'widget.js': {
        src: 'http://localhost:3002/widget.js',
        integrity: `sha384-${hash}`,
      },
    };

    const manifestPath = path.resolve(process.cwd(), 'public/manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    console.log('Manifest generated successfully!');
  } catch (error) {
    console.error('Error generating manifest:', error);
    process.exit(1);
  }
};

generateManifest();