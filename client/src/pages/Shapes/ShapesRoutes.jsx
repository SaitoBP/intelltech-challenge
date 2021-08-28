import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router'

import Shapes from './Shapes'
import Shape from './Shape'

const ShapesRoutes = () => {
  const routeMatch = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${routeMatch.url}/`}>
        <Shapes />
      </Route>

      <Route path={`${routeMatch.url}/:shapeId`}>
        <Shape />
      </Route>
    </Switch>
  )
}

export default ShapesRoutes
