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
import WalletBalance from "../WalletBalanceInfo";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const renderRightNav = () => {
    if (auth.user) {
      return (
        <div style={{display:'flex', alignItems: "center" }} className="navbar-nav">
            {/* <Nav bg="dark" variant='dark'>
              
              Wallet Balance:

             <WalletBalance />
              
            
            </Nav> */}
          <Nav.Link href="/my_profile">
            Profile {''}
            {user.image && (
              <img style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                src={user.image} width={300}/>)}
          </Nav.Link>
        </div>
      );
    }
    return (
      <>
      </>
    );
  };
  const renderLeftNav = () => {
    if (auth.user) {
      return <div></div>;
    }
    return (
      <>
        <Nav.Link href="/register">Register </Nav.Link>

        <Nav.Link href="/login">Login </Nav.Link>
      </>
    );
  };

  return (
      <Navbar
        
        // bg="dark"
        style={{backgroundColor:'rgba(0, 0, 0, .8)'}}
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand
            style={{ color: "#1DB95F", fontWeight: "bold" }}
            href="/feed"
          >
            WeCare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            style={{ justifyContent: "space-between" }}
            id="basic-navbar-nav"
          >
            <Nav>
              {/* <Nav.Link href="/home">Home</Nav.Link> */}
              <Nav.Link href="/feed">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/new_campaign">
                  New Campaign
                </Nav.Link>
                <Nav.Link href="/my_donations">
                  My Donations
                </Nav.Link>

              {renderLeftNav()}
              

             
            

            </Nav> 
           
            {renderRightNav()}
            
          </Navbar.Collapse> 

        </Container>
       
      </Navbar>
  );
};
export default NavBar;
