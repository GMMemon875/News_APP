//Step 1
// sab se pahly ham navbar create karengi with  bootsript se
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/home">
            {" "}
            <h3>News Hub</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/sports"
                >
                  Spots
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/general"
                >
                  Gerenal
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
