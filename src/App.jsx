import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './components/Header/Header';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
       <Route path="/" exact={true} element={<Dashboard/>} />
       <Route path="/Dashboard" exact={true} element={<Dashboard/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
