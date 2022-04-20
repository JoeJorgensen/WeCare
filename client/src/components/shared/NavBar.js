import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "react-bootstrap/esm/Button";

const NavBar = () => {
  // if (user)=>  logout
  // if (!user)=>  login/register

  const auth = useContext(AuthContext);
  const renderRightNav = () => {
    if (auth.user) {
      return (
        <div style={{alignItems: 'center'}} class='navbar-nav'>
          <Nav.Link href="/my_profile">
                <img src="https://www.icba.org/images/default-source/events/convention--icba-live/2022/icons/speaker-bio-icon.png?sfvrsn=28e71d17_2" alt="img" width="30" height="28"/>
                </Nav.Link>
          <Nav.Link onClick={auth.handleLogout}>Logout</Nav.Link>
        </div>
      );
    }
    return (
      <>
        {/* <Badge style={{color: 'white'}} href="/login">Login</Badge> */}
        <Badge></Badge>
      </>
    );
  };
  const renderLeftNav = () => {
    if (auth.user) {
      return (
        <div>

        </div>
      );
    }
    return (
      <>
        {/* <Badge style={{color: 'white'}} href="/register">Register</Badge> */}

        <Nav.Link href="/register">Register </Nav.Link>

        <Nav.Link href="/login">Login </Nav.Link>
      </>
    );
  };

  // const renderLeft = ()=>{
  //     if( auth.user) {
  //         return (
  //             <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item>123
  //         )
  //     }
  // }
  return (
    <div>
      <Navbar style={ {display: 'flex'} }sticky="top" bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand style={{ color: 'green', fontWeight: 'bold' }} href="/feed">WeCare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse style={{justifyContent:'space-between'}} id="basic-navbar-nav">
            <Nav>
              {/* <Nav.Link href="/home">Home</Nav.Link> */}
              <Nav.Link href="/feed">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

              <NavDropdown
                bg="dark"
                variant="dark"
                title="Fundraising"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/categories">
                  Categories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/my_donations">
                  My Donations
                </NavDropdown.Item>
              </NavDropdown>
              {renderLeftNav()}
             </Nav>
              {renderRightNav()}
               
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
