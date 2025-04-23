import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/sidebarContents/Home";
import NewOrderTable from "./components/sidebarContents/NewOrderTable";
import PieChart from "./components/sidebarContents/PieChart";
import UserList from "./components/sidebarContents/UserList";
import AddProduct from "./components/sidebarContents/AddProduct";
import OrderManagement from "./components/sidebarContents/OrderManagement";
import TodoList from "./components/sidebarContents/TodoList";
import Authentication from "./components/sidebarContents/Authentication";
import ViewProducts from "./components/sidebarContents/ViewProduct";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login route */}
          <Route path="/" element={<Authentication />} />

          {/* Protected routes - show only if logged in */}
          {isLoggedIn && (
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <div className="d-flex">
                    <div>
                      <Sidebar />
                    </div>
                    <div
                      className="w-100 content"
                      style={{
                        maxHeight: "720px",
                        overflowX: "hidden",
                        overflowY: "auto",
                      }}
                    >
                      <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/orderList" element={<NewOrderTable />} />
                        <Route path="/piechart" element={<PieChart />} />
                        <Route path="/userinformation" element={<UserList />} />
                        <Route path="/AddProduct" element={<AddProduct />} />
                        <Route path="/ViewProduct" element={<ViewProducts />} />
                        <Route
                          path="/ordermangement"
                          element={<OrderManagement />}
                        />
                        <Route path="/todolist" element={<TodoList />} />
                      </Routes>
                    </div>
                  </div>
                </>
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
