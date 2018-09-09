import webpack from 'webpack'
import path from 'path'

const mode = process.env.NODE_ENV

export default {
  devtool: 'inline-source-map',

  mode: mode,

  entry: [
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
    ]
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, 'src/'),
    }
  }
}
