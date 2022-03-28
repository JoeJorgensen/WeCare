import logo from './logo.svg';
import './App.css';
import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Home from './components/shared/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Feed from './components/auth/Feed';


function App() {
  return (
    <div >
      <NavBar />

      <FetchUser>
      <>
       <Routes>
         {/* UNPROTECTED */}
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>

          {/* PROTECTED */}
        <Route element={<ProtectedRoute/>}>
          <Route path='/feed' element={<Feed/>}/>
       </Route>


      <Route path='*' element={<NoMatch/>}/>
      </Routes>
      </>
      </FetchUser>

    </div>
  );
}

export default App;
