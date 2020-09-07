import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart <span className="badge">{props.items.length}</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/vegetables">Vegetables</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
