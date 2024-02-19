// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/assets/sounds/', // Adjust the path as per your project structure
              outputPath: 'assets/sounds/', // Adjust the path as per your project structure
            },
          },
        ],
      });
  
      return config;
    },
  };
  
