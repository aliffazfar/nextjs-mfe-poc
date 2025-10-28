import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config: { plugins: NextFederationPlugin[]; }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'login',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './LoginForm': './app/components/LoginForm.tsx',
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
