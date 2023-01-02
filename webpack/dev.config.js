const paths = require('./paths');
const common = require('./common.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: paths.build,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,       
  },  
});