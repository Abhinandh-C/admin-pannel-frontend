import React, { Fragment } from "react";
import { Tab, Row, Col, Container, Nav,Button } from "react-bootstrap";
// import '../Style/Style.css';
// import admin from '../Images/self.jpg';
// import star from '../Images/star.png';
import { Link, Route, Routes } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import {
  BsCalendarFill,
  BsCircleHalf,
  BsFillPeopleFill,
  BsFillPersonLinesFill,
  BsCardChecklist,
  BsCalendar,
  BsGraphUp,
  BsGear,
} from "react-icons/bs";

import NewOrderTable from "../../components/sidebarContents/NewOrderTable";
import AddProduct from "../sidebarContents/AddProduct";
import ViewProduct from "../sidebarContents/ViewProduct";
// import VisitorRating from '../SidebarContent/VisitorRating';
import PieChart from "../sidebarContents/PieChart";
// import LineChart from '../SidebarContent/LineChart';
// import Userinfo from './UserInfo/Userinfo';
// import Calender from '../Celender/Calender';
// import SelsGraph from '../SidebarContent/SelsGraph';
// import TodoList from '../../components/sidebarContents/TodoList';
import Home from "../../components/sidebarContents/Home";
import OrderManagement from "../sidebarContents/OrderManagement";
import UserList from "../sidebarContents/UserList";
// import VisitorTracking from '../SidebarContent/VisitorTracking';
// import Wigets from '../SidebarContent/Wigets';
// import MailBox from '../SidebarContent/MailBox';
// import Login from '../SidebarContent/Login';

const Sidebar = () => {
  document.title = "Home";

  return (
    <Fragment>
      <Container fluid>
      <div
              className="sidebar"
              style={
                {maxHeight:"800px",overflowY:"auto"}
              }
            >
        <ul  className="border sidebarBg" >
          <li>
            <Link to={"/home"} >
                <Button className="btn">
            <FaHome /> Home
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsCalendarFill /> New order
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsCircleHalf /> Visitor Rating
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/piechart"} >
                <Button className="btn">
                <BsCircleHalf /> Pie Chart
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsCircleHalf /> Line Chart
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/userinformation"} >
                <Button className="btn">
                <BsFillPersonLinesFill /> User Information
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsFillPeopleFill /> Unic visitor
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/AddProduct"} >
                <Button className="btn">
                <BsCalendar /> Add Product
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/ordermangement"} >
                <Button className="btn">
                <sGraphUp /> Order Management
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsCardChecklist /> Todo list
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsGear /> View Product
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsGear /> MailBox
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsGear /> Login
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsGear /> Register
            </Button>
            </Link>
          </li>
          <li>
                <Link to={"/orderList"} >
                <Button className="btn">
                <BsGear /> Settings
            </Button>
            </Link>
          </li>
         
        </ul>
        </div>

             
            
      
      </Container>
    </Fragment>
  );
};

export default Sidebar;
