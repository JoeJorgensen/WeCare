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
  const auth = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const renderRightNav = () => {
    if (auth.user) {
      return (
        <div style={{ alignItems: "center" }} className="navbar-nav">
          <Nav.Link href="/my_profile">
            {user.image && (
              <img
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
                src={user.image}
                width={300}
              />
            )}
          </Nav.Link>
        </div>
      );
    }
    return (
      <>
        <Badge></Badge>
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
    <div>
      <Navbar
        style={{ display: "flex" }}
        sticky="top"
        bg="dark"
        expand="lg"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand style={{ color: "green", fontWeight: "bold" }} href="/">
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
