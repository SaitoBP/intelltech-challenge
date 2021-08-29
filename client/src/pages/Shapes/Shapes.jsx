import React from 'react'

import { Box } from '../../components/Box'
import { Title } from '../../components/Title'

import ShapesForm from './ShapesForm'
import ShapesTable from './ShapesTable'

import useRetrieveShapes from './useRetrieveShapes'

const Shapes = () => {
  const { status, data } = useRetrieveShapes().useAll()

  return (
    <Box>
      <Title>Formas Geometricas</Title>
      <ShapesForm />
      {status === 'loading' ? <h1>Loading...</h1> : <ShapesTable data={data} />}
    </Box>
  )
}

export default Shapes
