import * as React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Alexandre Taurua
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-end text-bg-dark text-center"
        tabIndex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Welcome
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {' '}
                My Projects{' '}
              </a>

              <ul className="dropdown-menu dropdown-menu-dark text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    Mon Portfolio
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Mon Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Netflix 2
                  </a>
                </li>

                <li>
                  {' '}
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex mt-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
