import React from 'react'

import { useForm } from 'react-hook-form'

import { Form, FormFields } from '../../components/Form'
import { Select } from '../../components/Select'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'

import useSubmitShape from './useSubmitShape'
import useRetrieveDirectories from '../Directories/useRetrieveDirectories'

const ShapesForm = () => {
  const { register, handleSubmit } = useForm()

  const submit = useSubmitShape()

  const { status, data } = useRetrieveDirectories()

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormFields>
        {status === 'loading' ? (
          <Select id='shapes-directory' label='Diretorio'>
            <option value={null}>Loading...</option>
          </Select>
        ) : (
          <Select id='shapes-directory' label='Diretorio' register={register('directoryId')}>
            {data.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        )}

        <TextField
          id='shapes-name'
          required
          type='text'
          label='Nome'
          register={register('name')}
        />

        <Select id='shapes-type' label='Tipo' register={register('type')}>
          <option value='1-Quadrado'>Quadrado</option>
          <option value='2-Triangulo'>Triangulo</option>
        </Select>

        <TextField
          id='shapes-color'
          required
          type='color'
          label='Cor'
          register={register('color')}
        />

        <TextField
          id='shapes-size'
          required
          type='number'
          label='Tamanho(px)'
          register={register('size')}
        />
      </FormFields>

      <Button type='submit'>Criar</Button>
    </Form>
  )
}

export default ShapesForm
