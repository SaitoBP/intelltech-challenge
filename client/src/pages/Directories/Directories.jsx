import React from 'react'

import { Box } from '../../components/Box'
import { Title } from '../../components/Title'

import DirectoriesForm from './DirectoriesForm'
import DirectoriesTable from './DirectoriesTable'

import useRetrieveDirectories from './useRetrieveDirectories'

const Directories = () => {
  const { status, data } = useRetrieveDirectories()

  return (
    <Box>
      <Title>Diretorios</Title>
      <DirectoriesForm />
      {status === 'loading' ? <h1>Loading...</h1> : <DirectoriesTable data={data} />}
    </Box>
  )
}

export default Directories
