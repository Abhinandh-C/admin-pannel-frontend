import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../search box/SearchBox";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import pic from "../../images/pic.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { FaShieldAlt } from "react-icons/fa";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [anchorElNotification, setAnchorElNotification] = useState(null);

  const open = Boolean(anchorElCart);
  const openMyAcc = Boolean(anchorEl);
  const Notification = Boolean(anchorElNotification);

  const handleClick = (event) => {
    setAnchorElCart(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElCart(null);
  };
  const myAccHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const myAccHandleClose = () => {
    setAnchorEl(null);
  };
  const HandleNotificationClick = (event) => {
    setAnchorElNotification(event.currentTarget);
  };
  const HandleNotificationClose = () => {
    setAnchorElNotification(null);
  };
  return (
    <div>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100 ">
          <div className="raw d-flex align-items-center">
            {/* logo wrapper */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className=" d-flex align-items-center  logo">
                <img src={logo} alt="logo" />
                <span>GO CART</span>
              </Link>
            </div>
            <div
              className="col-sm-3 d-flex align-items-center part2"
              style={{ paddingLeft: "40px" }}
            >
              <Button className="rounded-circle">
                <MdOutlineMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center part3 justify-content-end">
              <Button className="rounded-circle">
                <MdLightMode />
              </Button>
              <Button className="rounded-circle" onClick={handleClick}>
                <IoIosCart />
              </Button>
              <Menu
                anchorEl={anchorElCart}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head d-flex align-items-center justify-content-between">
                  <h4>Order (12)</h4>
                  <span>
                    <Settings className="set" />
                  </span>
                </div>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>

              <Button className="rounded-circle">
                <IoMailUnread />
              </Button>
              <Button
                className="rounded-circle"
                onClick={HandleNotificationClick}
              >
                <MdNotificationsActive />
              </Button>

              <Menu style={{marginBottom:"0px"}}
                anchorEl={anchorElNotification}
                id="Notification"
                open={Notification}
                onClose={HandleNotificationClose}
                onClick={HandleNotificationClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="head d-flex align-items-center justify-content-between">
                  <h4>Notification (24)</h4>
                  <span>
                    <Settings className="set" />
                  </span>
                </div>
                <Divider />

                <div style={{ maxHeight: "300px", overflowY: "auto" }}>

                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
               
                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
               
                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
               
                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
               
                <MenuItem onClick={HandleNotificationClose} style={{backgroundColor:"#ebf6ff ",marginBottom:"2px"}}>
                
                 <div className="d-flex listdrop">
                 <div className="userImg" style={{ marginRight: "10px",marginTop:"5px" }}>
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>

                  <div className="dropdownInfo">
                    
                      <span className="downInfo">
                        <b>Sruthi </b>
                        added to his favorite{" "}
                        <p style={{marginBottom:"4px"}}>
                          list <b>leather type mobile pouch</b>
                        </p>
                        
                      </span>
                    
                    <p className="text-sky">few seconds ago..</p>
                  </div>
                 </div>
                </MenuItem>
                </div>
              </Menu>

              <Button
                className="myAccWrapper d-flex align-items-center "
                onClick={myAccHandleClick}
              >
                <div className="myAcc d-flex align-items-center">
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={pic} alt="profilePic" />
                    </span>
                  </div>
                </div>

                <div className="userInfo">
                  <h4 className="name">Abhinandh</h4>
                  <p className="mb-0">abhinandh2001@gmail.com</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account"
                open={openMyAcc}
                onClose={myAccHandleClose}
                onClick={myAccHandleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={myAccHandleClose}>
                  <ListItemIcon>
                    <PersonAdd style={{ fill: "green" }} fontSize="small" />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <MenuItem onClick={myAccHandleClose}>
                  <ListItemIcon>
                    <FaShieldAlt style={{ fill: "red" }} fontSize="small" />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={myAccHandleClose}>
                  <ListItemIcon>
                    <Logout style={{ fill: "red" }} fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
