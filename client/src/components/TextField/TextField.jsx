import React from 'react'

import useInputStyles from '../useInputStyles'

const TextField = ({ id, type, label, required, register }) => {
  const css = useInputStyles()

  return (
    <div className={css.root}>
      <label htmlFor={id}>{label}</label>
      <input className={css.input} required={required} id={id} type={type} {...register} />
    </div>
  )
}

export default TextField
