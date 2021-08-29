import React from 'react'

import { useQuery } from 'react-query'

import { Box } from '../../components/Box'
import { Title } from '../../components/Title'

import ShapesForm from './ShapesForm'
import ShapesTable from './ShapesTable'

const Shapes = () => {
  const { status, data } = useQuery('shapes', async () => {
    const response = await fetch('http://localhost:5000/api/shapes', { method: 'GET' })

    return response.json()
  })

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <Box>
      <Title>Formas Geometricas</Title>
      <ShapesForm />
      <ShapesTable data={data} />
    </Box>
  )
}

export default Shapes
