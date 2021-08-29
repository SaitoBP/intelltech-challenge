import React from 'react'

import useButtonStyles from './useButtonStyles'

const Button = ({ children, type, onClick }) => {
  const css = useButtonStyles()

  return (
    <button className={css.root} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
