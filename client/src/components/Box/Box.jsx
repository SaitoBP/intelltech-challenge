import React from 'react'

import useBoxStyles from './useBoxStyles'

const Box = ({ children }) => {
  const css = useBoxStyles()

  return <section className={css.root}>{children}</section>
}

export default Box
