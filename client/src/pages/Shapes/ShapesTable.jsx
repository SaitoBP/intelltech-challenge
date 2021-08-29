import React from 'react'

import { useRouteMatch, useHistory } from 'react-router-dom'

import { Table, TableActions } from '../../components/Table'

import ShapeColor from './ShapeColor'

import useShapesStyles from './useShapesStyles'

const ShapesTable = ({ data }) => {
  const css = useShapesStyles()

  let match = useRouteMatch()
  let history = useHistory()

  const handleDetail = data => {
    const goTo = () => {
      history.push(`${match.url}/${data.id}`)
    }

    return goTo
  }

  return (
    <Table>
      <thead>
        <tr>
          <td align='left'>Diretorio</td>
          <td align='left'>Nome</td>

          <td align='center' className={css.table_col_color}>
            Cor
          </td>

          <TableActions header type='edit' />
          <TableActions header type='delete' />
        </tr>
      </thead>

      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td align='left' onClick={handleDetail(row)}>
              {row.directories.name}
            </td>

            <td align='left' onClick={handleDetail(row)}>
              {row.name}
            </td>

            <td align='center' onClick={handleDetail(row)}>
              <div className={css.color_container}>
                <span>{row.color}</span>
                <ShapeColor color={row.color} />
              </div>
            </td>

            <TableActions type='edit' />
            <TableActions type='delete' />
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ShapesTable
