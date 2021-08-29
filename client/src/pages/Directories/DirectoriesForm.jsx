import React from 'react'

import { useForm } from 'react-hook-form'

import { Form, FormFields } from '../../components/Form'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'

import useSubmitDirectory from './useSubmitDirectory'

const DirectoriesForm = () => {
  const { register, handleSubmit } = useForm()

  const submit = useSubmitDirectory()

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormFields>
        <TextField
          id='directories-name'
          required
          type='text'
          label='Nome'
          width='400px'
          register={register('name')}
        />
      </FormFields>

      <Button type='submit'>Criar</Button>
    </Form>
  )
}

export default DirectoriesForm
