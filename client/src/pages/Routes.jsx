import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { Directories } from './Directories'
import { Homepage } from './Homepage'
import { Shapes } from './Shapes'

const Routes = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/diretorio'>Diretorios</Link>
          </li>

          <li>
            <Link to='/formas'>Formas Geometricas</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>

        <Route path='/diretorio'>
          <Directories />
        </Route>

        <Route path='/formas'>
          <Shapes />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
