import React from 'react'

import { useForm } from 'react-hook-form'

import { Select } from '../../components/Select'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'

import useSubmitForm from './useSubmitForm'
import useRetrieveDirectories from '../Directories/useRetrieveDirectories'

import useShapesStyles from './useShapesStyles'

const ShapesForm = () => {
  const css = useShapesStyles()

  const { register, handleSubmit } = useForm()

  const submit = useSubmitForm()

  const { status, data } = useRetrieveDirectories()

  return (
    <form onSubmit={handleSubmit(submit)} className={css.form}>
      <div className={css.form_fields}>
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
      </div>

      <Button type='submit'>Criar</Button>
    </form>
  )
}

export default ShapesForm
