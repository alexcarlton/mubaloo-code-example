import React from 'react'
import _ from 'lodash'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Div from '~/components/core/div'
import createStore from '~/redux/store'
import { routes } from '~/routes'
import style from './style'
import '~/style/globalStyle'

// Create the Redux store
const store = createStore()

export default () => (
  // Expose the Redux store as a prop to the <Provider /> components children
  <Provider store={store}>
    <BrowserRouter>
      <Div className={style.routesContainer}>
        {_.map(routes, (route, index) => (
          // Create each route in the routes array
          <Route key={`route-${index}`} path={route.path} component={route.component} exact={route.exact} />
        ))}
      </Div>
    </BrowserRouter>
  </Provider>
)
