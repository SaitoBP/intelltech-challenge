import React from 'react'

import { Table, TableActions } from '../../components/Table'

const DirectoriesTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>Nome</td>

          <TableActions header type='edit' />
          <TableActions header type='delete' />
        </tr>
      </thead>

      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>

            <TableActions type='edit' />
            <TableActions type='delete' />
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default DirectoriesTable
