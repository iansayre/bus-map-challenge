/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
// const port = 8000;

new WebpackDevServer(webpack(config), config.devServer)
.listen(8000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8000');
  console.log('Opening your system browser...');
  open('http://localhost:8000/webpack-dev-server/');
});
