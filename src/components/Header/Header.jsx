import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div>
      <header className='d-flex align-items-center'>
        <div className="container-fluid w-100 ">
           <div className="row d-flex align-items-center">
        {/* logo wrapper */}
            <div className="col-xs-3 d-flex align-items-center logo">
                <Link to={'/'}>
                <img src={logo} alt="logo" />
                <span>GO CART</span>
                </Link>

            </div>
           </div>
        </div>
      </header>
    </div>
  )
}

export default Header
