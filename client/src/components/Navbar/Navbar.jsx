import React from 'react'

import { Link } from 'react-router-dom'

import useNavbarStyles from './useNavbarStyles'

const Navbar = () => {
  const css = useNavbarStyles()

  return (
    <nav className={css.root}>
      <ul className={css.list}>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/diretorios'>Diretorios</Link>
        </li>

        <li>
          <Link to='/formas'>Formas Geometricas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
