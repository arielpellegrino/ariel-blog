import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo1.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt=""/>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>CONTATO</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>SOBRE</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>LINK1</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>LINK2</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>LINK3</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
