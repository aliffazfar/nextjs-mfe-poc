import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config: { plugins: NextFederationPlugin[]; }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          login: 'login@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          profile: 'profile@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
        extraOptions: {}
      })
    );

    return config;
  },
};

export default nextConfig;
