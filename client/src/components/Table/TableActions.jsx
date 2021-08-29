import React from 'react'

import PropTypes from 'prop-types'

import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'

import useTableStyles from './useTableStyles'

const TableActions = ({ header, type }) => {
  const css = useTableStyles()

  let content

  if (header && type === 'edit') content = <p>Editar</p>
  if (!header && type === 'edit') content = <MdEdit className={css.actions_icon} />

  if (header && type === 'delete') content = <p>Remover</p>
  if (!header && type === 'delete') content = <MdDelete className={css.actions_icon} />

  return (
    <td className={css.actions} align='center'>
      {content}
    </td>
  )
}

TableActions.propTypes = {
  header: PropTypes.bool,
  type: PropTypes.oneOf(['edit', 'delete']).isRequired,
}

export default TableActions
