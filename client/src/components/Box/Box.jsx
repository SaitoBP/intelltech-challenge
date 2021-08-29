import React from 'react'

import clsx from 'clsx'

import useBoxStyles from './useBoxStyles'

const Box = ({ children, className }) => {
  const css = useBoxStyles()

  return <section className={clsx(css.root, className)}>{children}</section>
}

export default Box
