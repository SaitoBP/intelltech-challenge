import React from 'react'

import useTableStyles from './useTableStyles'

const Table = ({ children }) => {
  const css = useTableStyles()

  return <table className={css.root}>{children}</table>
}

export default Table
