import React from 'react'

import useButtonStyles from './useButtonStyles'

const Button = ({ children, type }) => {
  const css = useButtonStyles()

  return (
    <button className={css.root} type={type}>
      {children}
    </button>
  )
}

export default Button
