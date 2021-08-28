import React from 'react'

import { useParams, useHistory } from 'react-router'

import { useQuery } from 'react-query'

const Shape = () => {
  const { shapeId } = useParams()

  const history = useHistory()

  const { status, data } = useQuery('shape', async () => {
    const response = await fetch(`http://localhost:5000/api/shapes/${shapeId}`, { method: 'GET' })

    return response.json()
  })

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  console.log(data)

  return (
    <div>
      <button onClick={history.goBack}>Voltar</button>
      <h1>Shape: {shapeId}</h1>
      <div>
        <p>Diretorio: {data.directoryId}</p>
        <p>Nome: {data.name}</p>
        <p>Tipo: {data.type}</p>
        <p>Cor: {data.color}</p>
        <p>Tamanho: {data.size}</p>
      </div>
    </div>
  )
}

export default Shape
