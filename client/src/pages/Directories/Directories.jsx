import React, { useState, useEffect } from 'react'

const Directories = () => {
  const [form, setForm] = useState({ id: '', name: '' })
  const [directories, setDirectories] = useState([])

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

  /* Fetch data */
  useEffect(() => {
    fetch('http://localhost:5000/api/directories', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setDirectories(res))
  })

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
          {directories.map(row => (
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
