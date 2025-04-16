import React from 'react'
import Button from "@mui/material/Button";
import { FaAngleRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiExcludeSquareFill } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { SiImessage } from "react-icons/si";
import { IoSettings } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className='sidebar'style={{overflowY:"auto"}}>
      <ul>
        <p style={{fontWeight:"500", fontSize:"12px" ,color:"#b6b6b6", marginBottom:"0px"}}>MAIN PAGES</p>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><MdDashboard/></span>Dashboard<span className='arrow'><FaAngleRight /></span></Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><PiExcludeSquareFill/></span>Products <span className='arrow'><FaAngleRight /></span></Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><IoMdCart/></span>Orders <span className='arrow'><FaAngleRight /></span></Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><SiImessage/></span>Message <span className='arrow'><FaAngleRight /></span></Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'>< FaBell /></span>Notification <span className='arrow'><FaAngleRight /></span></Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'>< IoSettings /></span>Setting <span className='arrow'><FaAngleRight /></span></Button>
</li>
    </ul>







      <ul>
        <p style={{fontWeight:"500", fontSize:"12px" ,color:"#b6b6b6", marginBottom:"0px"}}>UI PAGES</p>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><MdDashboard/></span>Alerts</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><PiExcludeSquareFill/></span>Avatars</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><IoMdCart/></span>Headings</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><SiImessage/></span>Buttons</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'>< FaBell /></span>Colors </Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'>< IoSettings /></span>Charts </Button>
</li>
    </ul>



      <ul>
        <p style={{fontWeight:"500", fontSize:"12px" ,color:"#b6b6b6", marginBottom:"0px"}}>OTHER PAGES</p>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><MdDashboard/></span>Overview</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><PiExcludeSquareFill/></span>Site Error</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><IoMdCart/></span>Documentation</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 15px",alignItems:"center",textTransform:"capitalize",fontWeight:"500"}}><span className='icon'><SiImessage/></span>Change Log</Button>
</li>
     

    </ul>
    </div>
  )
}

export default Sidebar
