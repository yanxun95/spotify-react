import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage";

const InfoRight = () => {
  return (
    <Router>
      <div className="info-right">
        <div className="nav-top-container">
          <div className="nav-top-right">
            <div className="btn-left-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </div>
            <div className="btn-left-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>

          <div className="user-profile">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle btn-user-profile"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="user-profile-pic">
                  <i className="bi bi-person user-profile"></i>
                </div>
                <span className="user-profile-name">Superman</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right profile"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item profile" href="#">
                  <span>Account</span>
                  <span className="ms-auto">
                    <i className="bi bi-box-arrow-up-right"></i>
                  </span>
                </a>
                <a className="dropdown-item profile" href="#">
                  Proifile
                </a>
                <a className="dropdown-item profile" href="login.html">
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
        <Homepage />
      </div>
    </Router>
  );
};

export default InfoRight;
