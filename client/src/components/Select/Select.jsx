import React from 'react'

import useInputStyles from '../useInputStyles'

const Select = ({ children, id, label, register }) => {
  const css = useInputStyles()

  return (
    <div className={css.root}>
      <label htmlFor={id}>{label}</label>
      <select className={css.input} id={id} {...register}>
        {children}
      </select>
    </div>
  )
}

export default Select
