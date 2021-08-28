import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'

import { Directories } from './Directories'
import { Homepage } from './Homepage'
import { Shapes } from './Shapes'

/* Create a Client */
const queryClient = new QueryClient()

const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default Routes
