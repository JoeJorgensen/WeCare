import logo from "./logo.svg";
import "./App.css";
import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./components/shared/Home";
import Register from "./components/shared/Register";
import Login from "./components/shared/Login";
import NoMatch from "./components/shared/NoMatch";
import NavBar from "./components/shared/NavBar";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Feed from "./components/auth/Feed";
import MyDonation from "./components/auth/MyDonation";
import About from "./components/shared/About";
import MyProfile from "./components/auth/MyProfile";
import Categories from "./components/auth/Categories";
import TroubleShoot from "./components/shared/TroubleShoot";
import CampaignShow from "./components/shared/CampaignShow";
import Donate from "./components/auth/Donate";
import Payment from "./components/auth/Payment";

import NewCampaign from "./components/auth/NewCampaign";


function App() {
  return (
    <div>
      <NavBar />

      <FetchUser>
        <>
          <Routes>
            {/* UNPROTECTED */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/troubleshoot" element={<TroubleShoot />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/about" element={<About />} />
              <Route path="/campaign_show/:id" element={<CampaignShow />} />
              <Route path="/categories" element={<Categories />} />

            {/* PROTECTED */}
            <Route element={<ProtectedRoute />}>
              <Route path="/my_donations" element={<MyDonation />} />
              <Route path="/donate" element={<Donate/>} />
              <Route path="/payment" element={<Payment/>} />

              <Route path="/my_profile" element={<MyProfile />} />
              <Route path="/new_campaign" element={<NewCampaign />} />
            </Route>

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      </FetchUser>
    </div>
  );
}

export default App;
