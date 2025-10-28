import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config: { plugins: NextFederationPlugin[]; }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'profile',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './UserProfile': './app/components/UserProfile.tsx',
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
