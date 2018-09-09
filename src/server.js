import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'

const port = process.env.NODE_ENV || '3000'
const app = express()
const compiler = webpack(webpackConfig)

app.listen(port, error => {
  if(error){
    console.log(error)
  } else {
    console.log('Server listening at port: ' + port)
  }
})

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../src/index.html'))
})

// Bundle index.js to bundle.js with Webpack when the server starts
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))