const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, { dev }) => {
    /* eslint no-param-reassign: ["error", {  "ignorePropertyModificationsFor": ["config"] }] */
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    } else {
      config.devtool = 'source-map';
      for (let i = 0; i < config.plugins.length; i += 1) {
        const plugin = config.plugins[i];
        if (plugin.constructor.name === 'UglifyJsPlugin') {
          plugin.options.sourceMap = true;
          break;
        }
      }
    }

    config.plugins.push(new Dotenv({
      path: './.env',
    }));

    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/,
      loader: 'url-loader',
    }, {
      test: /\.mp4/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimtetype: 'video/mp4',
        },
      },
    });
    return config;
  },
});
