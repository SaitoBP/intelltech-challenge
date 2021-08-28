import React, { useState } from 'react'

import { useRouteMatch, useHistory } from 'react-router-dom'

import { useQuery, useMutation, useQueryClient } from 'react-query'

const Color = ({ color }) => {
  return (
    <div
      style={{
        width: '15px',
        height: '15px',
        backgroundColor: color,
        borderRadius: '7.5px',
      }}
    ></div>
  )
}

const Shapes = () => {
  const [form, setForm] = useState({
    directoryId: '',
    name: '',
    type: '',
    color: '#000000',
    size: '',
  })

  const queryClient = useQueryClient()

  const { status, data } = useQuery('shapes', async () => {
    const response = await fetch('http://localhost:5000/api/shapes', { method: 'GET' })

    return response.json()
  })

  const { mutate } = useMutation(
    async data => {
      const response = await fetch('http://localhost:5000/api/shapes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.log(response)
        throw new Error('Error when creating new shape')
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('shapes')
      },
    }
  )

  let match = useRouteMatch()
  let history = useHistory()

  const submitForm = _e => {
    _e.preventDefault()

    console.log(form)
    mutate(form)
  }

  const handleForm = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleDetail = data => {
    const teste = () => {
      history.push(`${match.url}/${data.id}`)
    }

    return teste
  }

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Formas Geometricas</h1>

      <form onSubmit={submitForm}>
        <label htmlFor='shapes-directory'>Diretorio</label>
        <input type='text' name='directoryId' value={form.directoryId} onChange={handleForm} />

        <label htmlFor='shapes-name'>Nome</label>
        <input type='text' name='name' value={form.name} onChange={handleForm} />

        <label htmlFor='shapes-type'>Tipo</label>
        <input type='text' name='type' value={form.type} onChange={handleForm} />

        <label htmlFor='shapes-color'>Cor</label>
        <input type='color' name='color' value={form.color} onChange={handleForm} />

        <label htmlFor='shapes-size'>Tamanho(px)</label>
        <input type='text' name='size' value={form.size} onChange={handleForm} />

        <button type='submit'>Criar</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Diretorio</td>
            <td>Nome</td>
            <td>Cor</td>
            <td>Editar</td>
            <td>Remover</td>
          </tr>
        </thead>

        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.directoryId}</td>
              <td onClick={handleDetail(row)}>{row.name}</td>
              <td style={{ display: 'flex', alignItems: 'center' }}>
                {row.color} <Color color={row.color} />
              </td>
              <td>[Editar]</td>
              <td>[Remover]</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Shapes
