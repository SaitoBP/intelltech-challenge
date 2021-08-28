import React, { useState } from 'react'

import { useQuery, useMutation, useQueryClient } from 'react-query'

const Directories = () => {
  const [form, setForm] = useState({ name: '' })

  const queryClient = useQueryClient()

  /* Queries - Used for caching */
  const { status, data } = useQuery('directories', async () => {
    const response = await fetch('http://localhost:5000/api/directories', { method: 'GET' })

    return response.json()
  })

  const { mutate } = useMutation(
    async data => {
      const response = await fetch('http://localhost:5000/api/directories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.log(response)
        throw new Error('Error when creating new directory')
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('directories')
      },
    }
  )

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

  if (status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Diretorios</h1>

      <form onSubmit={submitForm}>
        <label htmlFor='directories-name'>Nome</label>
        <input type='text' name='name' value={form.name} onChange={handleForm} />

        <button type='submit'>Criar</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Editar</td>
            <td>Remover</td>
          </tr>
        </thead>

        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>[Editar]</td>
              <td>[Remover]</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Directories
