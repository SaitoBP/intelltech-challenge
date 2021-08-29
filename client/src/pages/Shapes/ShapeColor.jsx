import React from 'react'

import useShapesStyles from './useShapesStyles'

const ShapeColor = ({ color }) => {
  const css = useShapesStyles(color)

  return <div className={css.shape_color} />
}

export default ShapeColor
