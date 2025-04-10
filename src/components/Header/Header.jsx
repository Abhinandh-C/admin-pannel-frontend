import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../search box/SearchBox';
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import pic from "../../images/pic.jpg"

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

            <div className="col-sm-7 d-flex align-items-center part3 justify-content-end">
            <Button className='rounded-circle'><MdLightMode/></Button>
            <Button className='rounded-circle'><IoIosCart/></Button>
            <Button className='rounded-circle'><IoMailUnread/></Button>
            <Button className='rounded-circle'><MdNotificationsActive/></Button>



            <div className="imgWrapper">
            <div className="myAcc d-flex align-items-center">
              <div className="userImg">
                <span className='rounded-circle'>
                  <img src={pic} alt="profilePic"  />
                </span>
              </div>

            </div>
            </div>

            </div>



           </div>
        </div>
      </header>
    </div>
  )
}

export default Header
