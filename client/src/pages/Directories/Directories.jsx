import React, { useState } from 'react'

const FAKE_DATA = [
  { id: '1', name: 'Diretorio Fake 1' },
  { id: '2', name: 'Diretorio Fake 2' },
  { id: '3', name: 'Diretorio Fake 3' },
  { id: '4', name: 'Diretorio Fake 4' },
  { id: '5', name: 'Diretorio Fake 5' },
  { id: '6', name: 'Diretorio Fake 6' },
  { id: '7', name: 'Diretorio Fake 7' },
  { id: '8', name: 'Diretorio Fake 8' },
  { id: '9', name: 'Diretorio Fake 9' },
]

const Directories = () => {
  const [form, setForm] = useState({ id: '', name: '' })

  const submitForm = _e => {
    _e.preventDefault()

    console.log(form)
  }

  const handleForm = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    })
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
          {FAKE_DATA.map(row => (
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
