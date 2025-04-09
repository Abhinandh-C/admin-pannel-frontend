import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../search box/SearchBox';

const Header = () => {
  return (
    <div>
      <header className='d-flex align-items-center'>
        <div className="container-fluid w-100 ">
           <div className="raw d-flex align-items-center">
        {/* logo wrapper */}
            <div className="col-sm-2 part1">
                <Link to={'/'} className=' d-flex align-items-center  logo'>
                <img src={logo} alt="logo"  />
                <span>GO CART</span>
                </Link>

            </div>
            <div className="col-sm-3 d-flex align-items-center part2" style={{paddingLeft:"40px"}}>
            <Button className='rounded-circle'><MdOutlineMenuOpen/></Button>
            <SearchBox/>
            </div>




           </div>
        </div>
      </header>
    </div>
  )
}

export default Header
