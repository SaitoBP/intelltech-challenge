import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'

import { Directories } from './Directories'
import { Homepage } from './Homepage'
import { Shapes } from './Shapes'

import useGlobalStyles from './useGlobalStyles'

import { Navbar } from '../components/Navbar'

/* Create a Client */
const queryClient = new QueryClient()

const Routes = () => {
  useGlobalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route path='/diretorios'>
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
