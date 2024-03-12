import React from "react";
import { Link } from "react-router-dom"; // Import Link

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container d-flex justify-content-around">
          <a className="navbar-brand" href="/">
            Medical
          </a>
          <div className="user d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            <div className="logout ml-4">
              <button className="btn btn-danger">Log out</button>
              <Link to="/dbdata" className="btn btn-success ml-3">
                  DbData
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
