import webpack from 'webpack'
import path from 'path'

const mode = process.env.NODE_ENV

export default {
  devtool: 'inline-source-map',

  mode: mode,

  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js')
  ],

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName:"[path]_[local]--[hash:base64:6]"
            }
          },
          'sass-loader',
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      "~": path.resolve(__dirname, 'src/'),
    }
  }
}
