const HtmlWebPackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const  webpack = require('webpack');

module.exports = {
  mode: 'development',
  // Large file sizes: By default amCharts contains support for exporting charts.
  // This will create some files in your bundle directory (canvg.js, pdfmake.js, and xlsx.js).
  // These files are harmless: they are dynamically loaded only when they are needed, so they do not increase the download size.
  // However, they do increase the compilation times a bit, so if you do not need them you can disable them by adding this to your webpack.config.js
  // Docs: https://www.amcharts.com/docs/v4/getting-started/integrations/using-webpack/
  externals: [
    function(context, request, callback) {
        if (/xlsx|canvg|pdfmake/.test(request)) {
            return callback(null, "commonjs " + request);
        }
        callback();
    }
  ],
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      },
    //   {
    //     test: /.js$/,
    //     use: ["source-map-loader"],
    //     enforce: "pre"
    //   },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    inline: true,
    publicPath: '/',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8000
  }
};
