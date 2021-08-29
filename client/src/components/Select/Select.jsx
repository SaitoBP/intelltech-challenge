import React from 'react'

const Select = props => {
  const { children, id, name, label, onChange } = props

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} onChange={onChange}>
        {children}
      </select>
    </div>
  )
}

export default Select
