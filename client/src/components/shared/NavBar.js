
import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = ()=>{
    return (

        <div>
             <Navbar sticky="top" variant="dark" bg="dark"  expand='lg'>
  <Container fluid>
    <Navbar.Brand href="/home">Starter App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />

        <NavDropdown 
          id="nav-dropdown-dark-example"
          align={{ sm: 'end' }}
          title="Menu"
          menuVariant="dark"
        >
          <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item>
          <NavDropdown.Item style={{color: 'white'}} href="/login"><Badge>Login</Badge></NavDropdown.Item>
          <NavDropdown.Item style={{color: 'white'}} href="/register"><Badge>Register</Badge></NavDropdown.Item>
          
         
        </NavDropdown>


  </Container>
</Navbar>

        </div>
    )
} 
export default NavBar