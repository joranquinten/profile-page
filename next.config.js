const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    });
    return config;
  },
  exportPathMap(defaultPathMap) {
    return { '/': { page: '/index' } };
  },
});
