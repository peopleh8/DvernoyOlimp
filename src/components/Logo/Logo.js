import React, { useContext } from 'react'
import { Link } from 'gatsby'

import './Logo.scss'

import { PrefixContext } from '../../context/PrefixContext'

import logo from '../../images/logo.png'

const Logo = ({ className }) => {
  const prefix = useContext(PrefixContext)

  return (
    <div className={`logo ${className}`}>
      <Link className="logo__link" to={prefix}>
        <img src={logo} alt="" width={163} height={38} />
      </Link>
    </div>
  )
}

export default Logo