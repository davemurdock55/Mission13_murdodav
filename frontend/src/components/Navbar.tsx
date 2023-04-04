import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            🎬
            {/* 🎥 */}
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link" aria-current="page">
                <b>Home</b>
              </NavLink>
              <NavLink to="/podcasts" className="nav-link">
                <b>Podcasts</b>
              </NavLink>
              <NavLink to="/movies" className="nav-link">
                <b>Movie Collection</b>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
