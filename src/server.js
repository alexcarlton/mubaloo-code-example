import bodyParser from 'body-parser'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'

const port = process.env.PORT || '3000'
const app = express()
const compiler = webpack(webpackConfig)

app.listen(port, error => {
  if (error) {
    throw new Error(error)
  }
  console.log(`Server listening at port: ${port}`)
})

app.use(bodyParser.json())

// Bundle index.js to bundle.js with Webpack and serve it at /bundle.js
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }),
)

app.post('/answers', (request, response) => {
  console.log('User Data:')
  console.log(request.body)
  response.send()
})

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../src/index.html'))
})
