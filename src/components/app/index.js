import React from 'react'
import _ from 'lodash'
import { BrowserRouter, Route } from 'react-router-dom'
import { routes } from '~/routes'

export default () => (
  <BrowserRouter>
    <div>{_.map(routes, (route, index) => <Route key={`route-${index}`} path={route.path} component={route.component} exact={route.exact} />)}</div>
  </BrowserRouter>
)
