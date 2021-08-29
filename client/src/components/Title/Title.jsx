import React from 'react'

import useTitleStyles from './useTitleStyle'

const Title = ({ children }) => {
  const css = useTitleStyles()

  return <h1 className={css.root}>{children}</h1>
}

export default Title
