import { registerApplication, start } from 'single-spa';

console.log('Registering application...');
registerApplication(
  '@poc/mfe1',
  () => {
    console.log('Loading mfe1...');
    return import('//localhost:8080/poc-mfe1.js').then(module => {
      console.log('mfe1 loaded successfully', module);
      return module;
    }).catch(err => {
      console.error('Failed to load mfe1', err);
      throw err;
    });
  },
  (location) => {
    console.log('Checking if mfe1 should be active for location:', location.pathname);
    return location.pathname.startsWith('/');
  }
);

console.log('Starting single-spa...');
start();