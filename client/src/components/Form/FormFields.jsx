import React from 'react'

import useFormStyles from './useFormStyles'

const FormFields = ({ children }) => {
  const css = useFormStyles()

  return <div className={css.fields}>{children}</div>
}

export default FormFields
