process.env.NODE_ENV = 'production';

var chalk = require('chalk');
var webpack = require('webpack');
var config = require('../config/webpack.config.prod');
var paths = require('../config/paths');

function build() {
  console.log('Creating a node library build...');
  webpack(config).run((err, stats) => {
    if (err) {
      console.error('Failed to create a node library build. Reason:');
      console.error(err.message || err);
      process.exit(1);
    }

    console.log(chalk.green('Compiled successfully.'));
    console.log();
  });
}

build();