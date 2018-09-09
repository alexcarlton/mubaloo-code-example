import React from 'react'
import _ from 'lodash'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from '~/redux/store'
import { routes } from '~/routes'
import '~/style/globalStyle'

const store = createStore()

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {_.map(routes, (route, index) => (
          <Route key={`route-${index}`} path={route.path} component={route.component} exact={route.exact} />
        ))}
      </div>
    </BrowserRouter>
  </Provider>
)
