import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/sidebarContents/Home";
import NewOrderTable from "./components/sidebarContents/NewOrderTable";
import PieChart from "./components/sidebarContents/PieChart";
import UserList from "./components/sidebarContents/UserList";
import AddProduct from "./components/sidebarContents/AddProduct";
import OrderManagement from "./components/sidebarContents/OrderManagement";
import TodoList from "./components/sidebarContents/TodoList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="d-flex">
        <div>
          
            <Sidebar />
          </div>
        
            <div className="w-100 content" style={
                {maxHeight:"720px",overflowX:"hidden",overflowY:"auto"}
              }> 
            <Routes>
              <Route path="/home" exact={true} element={<Home />} />
              <Route path="/orderList" exact={true} element={<NewOrderTable/>} />
              <Route path="/piechart" exact={true} element={<PieChart />} />
              <Route path="/userinformation" exact={true} element={<UserList />} />
              <Route path="/AddProduct" exact={true} element={<AddProduct />} />
              <Route path="/ordermangement" exact={true} element={<OrderManagement />} />
              <Route path="/todolist" exact={true} element={<TodoList />} />
              <Route path="/Dashboard" exact={true} element={<Dashboard />} />
              <Route path="/Dashboard" exact={true} element={<Dashboard />} />
              <Route path="/Dashboard" exact={true} element={<Dashboard />} />
            </Routes>
            </div>
            </div>
      </BrowserRouter>
    </>
  );
}

export default App;
