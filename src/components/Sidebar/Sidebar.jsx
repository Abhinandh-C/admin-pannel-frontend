import React from 'react'
import Button from "@mui/material/Button";
import { FaAngleRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiExcludeSquareFill } from "react-icons/pi";
import { IoMdCart } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { SiImessage } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { SiSoundcharts } from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io";
import { FaHeading } from "react-icons/fa";
import { FaMouse } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { TbAlertSquareFilled } from "react-icons/tb";
import { GrOverview } from "react-icons/gr";
import { IoDocuments } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <p style={{fontWeight:"500", fontSize:"12px" ,color:"#b6b6b6", marginBottom:"0px"}}>MAIN PAGES</p>
        <li>
          <Link to="/">
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><MdDashboard/></span>Dashboard<span className='arrow'><FaAngleRight /></span></Button>
</Link>
</li>
        <li>
         
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><PiExcludeSquareFill/></span>Products <span className='arrow'><FaAngleRight /></span></Button>
      <ul className='submenu'>
        <li> <Link to="#">Product List</Link></li>
        <li> <Link to="#">Product View</Link></li>
        <li> <Link to="#">Product Upload</Link></li>
      </ul>
</li>
        <li>
          <Link to="/">
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><IoMdCart/></span>Orders <span className='arrow'><FaAngleRight /></span></Button>
</Link>
</li>
        <li>
          <Link to="/">
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><SiImessage/></span>Message <span className='arrow'><FaAngleRight /></span></Button>
</Link>
</li>
        <li>
          <Link to="/">
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'>< FaBell /></span>Notification <span className='arrow'><FaAngleRight /></span></Button>
</Link>
</li>
        <li>
          <Link to="/">
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'>< IoSettings /></span>Setting <span className='arrow'><FaAngleRight /></span></Button>
</Link>
</li>
    </ul>







      <ul>
        <p style={{fontWeight:"500", fontSize:"12px" ,color:"#b6b6b6", marginBottom:"0px"}}>UI PAGES</p>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><TbAlertSquareFilled/></span>Alerts</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><AiFillPicture/></span>Avatars</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><FaHeading/></span>Headings</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'>< FaMouse /></span>Buttons</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><  IoIosColorPalette  /></span>Colors </Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'>< SiSoundcharts /></span>Charts </Button>
</li>
    </ul>



      <ul>
        <p style={{fontWeight:"500", fontSize:"12px" ,color:"#b6b6b6", marginBottom:"0px"}}>OTHER PAGES</p>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><GrOverview/></span>Overview</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><TbAlertSquareFilled/></span>Site Error</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><IoDocuments/></span>Documentation</Button>
</li>
        <li>
<Button className='w-100' style={{color:"#5d5c71",textAlign:"left",justifyContent:"left",borderRadius:"10px",padding:"12px 10px",alignItems:"center",textTransform:"capitalize",fontSize:"15px",fontWeight:"500"}}><span className='icon'><FaBloggerB/></span>Change Log</Button>
</li>
    </ul>

    </div>
  )
}

export default Sidebar
