var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
            {
                // loader to transpile the Typescript code to ES5, guided by the tsconfig.json file
                loader: 'awesome-typescript-loader',
                options: { configFileName: 'tsconfig.json' }
            }, 'angular2-template-loader' //loads angular components' template and styles
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('app'),
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        include: helpers.root('app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // new webpack.ContextReplacementPlugin(
    //   // The (\\|\/) piece accounts for path separators in *nix and Windows
    //   /angular(\\|\/)core(\\|\/)@angular/,
    //   helpers.root('./src'), // location of your src
    //   {} // a map of your routes
    // )
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /(.+)?angular(\\|\/)core(.+)?/,
        helpers.root('app'), // location of your app
        {} // a map of your routes
    )
  ]
}