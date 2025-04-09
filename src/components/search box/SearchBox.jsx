import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className='searchbox position-relative d-flex align-items-center ms-4'>

<IoSearch className='searchIcon' />
        <input type="text" style={{border:"none",backgroundColor:"#f0f5ff",fontSize:"13px",outline:"none"}}  placeholder='Search Here...'/>
      
    </div>
  )
}

export default SearchBox
