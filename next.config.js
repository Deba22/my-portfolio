
  //const withCSS = require('@zeit/next-css');
//const compose = require('next-compose');
//cssConfig = {};
module.exports 
//= compose([
  //[withCSS, cssConfig],
  ={
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/sounds/',
                outputPath: 'static/sounds/',
                name: '[name].[ext]',
                esModule: false,
              },
            },
          });
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'debasis1.umbhost.dev',
          port: '',
          pathname: '/media/**',
        },
        {
          protocol: 'https',
          hostname: 'localhost',
          port: '44378',
          pathname: '/media/**',
        },
      ],
    },
  }
//]);
