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
          <Link className="link" to="/">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/?cat=art">
            <h6>artes</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>ciencias</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>tecnologia</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>cinema</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>design</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>comida</h6>
          </Link>

          <span className="write">
            <Link className="link" to="/write">

              {currentUser ? (
                  <span>
                              <span className="separetor">
                             |
                              </span>
                      Postar
                  </span>
              ) : (
                  <span>  </span>
              )}

            </Link>
          </span>
          <span className="logado">[   {currentUser?.username}   ]</span>
          {currentUser ? (
            <span onClick={logout} className="logout">  ↪️ </span>
          ) : (
            <Link className="link" to="/login">              Login            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
