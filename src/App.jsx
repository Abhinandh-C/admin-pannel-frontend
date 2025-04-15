import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main d-flex">
          <div className="sidebar-Wrapper">
            <Sidebar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/Dashboard" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
