var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    //the entry-point files that define the bundles
    entry: {
        pollyfills: './app/pollyfills.ts', //the polyfills needed to run Angular applications in most modern browsers
        vendor: './app/vendor.ts', //the third-party dependencies such as Angular, lodash, and bootstrap.css
        app: './app/main.ts' //the application code
    },

    //resolve extension-less file requests by looking for matching files with .ts extension or .js
    resolve: {
        extensions: ['.ts', '.js', '.html']
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
                //loads component templates
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                //pattern matches application-wide styles
                test: /\.css$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: 'css-loader?sourceMap'
                    }
                )
            },
            {
                //pattern handles component-scoped styles (the ones specified in a component's styleUrls metadata property
                test: /\.css$/,
                include: helpers.root('app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        // new webpack.ContextReplacementPlugin(
        //     // The (\\|\/) piece accounts for path separators in *nix and Windows
        //     /angular(\\|\/)core(\\|\/)@angular/,
        //     helpers.root('./'), // location of your app
        //     {} // a map of your routes
        // ),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /(.+)?angular(\\|\/)core(.+)?/,
            helpers.root('app'), // location of your app
            {} // a map of your routes
        ),

        //The CommonsChunkPlugin identifies the hierarchy among three chunks: app -> vendor -> polyfills. 
        //Where Webpack finds that app has shared dependencies with vendor, it removes them from app.
        //It would remove polyfills from vendor if they shared dependencies, which they don't
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'pollyfills']
        }),

        //Webpack generates a number of js and CSS files. You could insert them into the index.html manually. 
        //That would be tedious and error-prone. Webpack can inject those scripts and links for you with the HtmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]

};