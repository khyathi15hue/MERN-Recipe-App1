import React, { useState } from 'react'

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(false);
const [fullScreen, setFullScreen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevents page refresh
              setShowLogo(!showLogo);
            }}
          >
            <img 
              src="https://logodix.com/logo/1775000.png" 
              alt="Logo" 
              style={{ height: "40px", marginRight: "10px", cursor: "pointer" }} 
            />
            KHYARA Feast
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <a className="btn btn-light" href="#">Login</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <a className="btn btn-light" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showLogo && (
        <div className="text-center mt-3">
          <img 
            src="https://logodix.com/logo/1775000.png" 
            alt="Large Logo" 
            style={{ height: "100px", cursor: "pointer" }} 
            onClick={() => setFullScreen(true)}
          />
        </div>
      )}

      {fullScreen && (
        <div 
          className="full-screen-overlay" 
          onClick={() => setFullScreen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img 
            src="https://logodix.com/logo/1775000.png" 
            alt="Full Screen Logo" 
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar
