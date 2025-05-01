import React, { Fragment } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const Sidebar = () => {
  document.title = "Home";

  return (
    <Fragment>
      <Container>
        <div
          className="sidebar"
          style={{ maxHeight: "800px", overflowY: "auto" , overflowX:'hidden'}}
        >
          <ul className="border sidebarBg">
            <li>
              <Link to={"/home"}>
                <Button className="btn">
                  <FaHome /> Home
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/orderList"}>
                <Button className="btn">
                  <BsCalendarFill /> New order
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/orderList"}>
                <Button className="btn">
                  <BsCircleHalf /> Visitor Rating
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/piechart"}>
                <Button className="btn">
                  <BsCircleHalf /> Pie Chart
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/orderList"}>
                <Button className="btn">
                  <BsCircleHalf /> Line Chart
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/userinformation"}>
                <Button className="btn">
                  <BsFillPersonLinesFill /> User Information
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/unicVisitor"}>
                <Button className="btn">
                  <BsFillPeopleFill /> Unic visitor
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/AddProduct"}>
                <Button className="btn">
                  <BsCalendar /> Add Product
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/ordermangement"}>
                <Button className="btn">
                  <BsGraphUp /> Order Management
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/todolist"}>
                <Button className="btn">
                  <BsCardChecklist /> Todo list
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/ViewProduct"}>
                <Button className="btn">
                  <BsGear /> View Product
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/orderList"}>
                <Button className="btn">
                  <BsGear /> MailBox
                </Button>
              </Link>
            </li>
           
            <li>
              <Link to={"/orderList"}>
                <Button className="btn">
                  <BsGear /> Register
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/orderList"}>
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
