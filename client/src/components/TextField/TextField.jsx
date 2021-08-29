import React from 'react'

import useInputStyles from '../useInputStyles'

const TextField = ({ id, type, label, required, width, register }) => {
  const css = useInputStyles(width)

  return (
    <div className={css.root}>
      <label htmlFor={id}>{label}</label>
      <input
        className={css.input}
        style={{ width: width }}
        required={required}
        id={id}
        type={type}
        {...register}
      />
    </div>
  )
}

export default TextField
