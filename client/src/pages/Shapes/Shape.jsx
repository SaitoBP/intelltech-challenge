import React from 'react'

import { useHistory } from 'react-router'

import { Title } from '../../components/Title'
import { Box } from '../../components/Box'
import { Button } from '../../components/Button'

import ShapeColor from './ShapeColor'

import useRetrieveShapes from './useRetrieveShapes'

import useShapesStyles from './useShapesStyles'

const Shape = () => {
  const { status, data } = useRetrieveShapes().useById()

  const css = useShapesStyles()

  const history = useHistory()

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <Box className={css.shape_box}>
      <Title>{data.name}</Title>

      <div className={css.shape_info}>
        <p>Diretorio: {data.directories.name}</p>
        <p>Nome: {data.name}</p>
        <p>Tipo: {data.type}</p>

        <div className={css.color_container}>
          <p>Cor: {data.color.toUpperCase()}</p>
          <ShapeColor color={data.color} />
        </div>

        <p>Tamanho: {data.size}</p>
      </div>

      <Button onClick={history.goBack}>Voltar</Button>
    </Box>
  )
}

export default Shape
