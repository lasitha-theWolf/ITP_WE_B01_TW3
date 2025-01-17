import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#040430"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../slogo.png" alt="Logo" width="128" height="35" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/showvehicle" className="nav-link active" aria-current="page">Vehicles</Link>
            </li>

            <li className="nav-item">
              <Link to="/showvehicle" className="nav-link active" aria-current="page">Appointments</Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Our Services</Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Feedbacks</Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Inquiries</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
      <style>
        {`
          .nav-link {
            margin: 0 10px;
            font-size: 18px;
          }

          .nav-link:hover {
            background-color: #040430 !important;
            color: #fff;
            border-radius: 20px;
          }
        `}
      </style>
    </nav>
  );
}

export default Header;