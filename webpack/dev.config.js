const paths = require('./paths');
const common = require('./common.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    hot: true,
    open: true,
    port: 3000,       
  },  
});