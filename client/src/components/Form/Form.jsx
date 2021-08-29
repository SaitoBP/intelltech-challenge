import React from 'react'

import useFormStyles from './useFormStyles'

const Form = ({ children, onSubmit }) => {
  const css = useFormStyles()

  return (
    <form className={css.root} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
