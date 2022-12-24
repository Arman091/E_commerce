import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
      <div>
        <ul className="nav-ul">
          <li>
            <Link Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link Link to="/add">
              Add Products
            </Link>
          </li>
          <li>
            <Link Link to="/update">
              Update Product
            </Link>
          </li>
          <li>
            <Link Link to="/logout">
              Logout
            </Link>
          </li>
          <li>
            <Link Link to="/profile">
              profile
            </Link>
          </li>

          <li>
            <Link Link to="/signup">
              signup
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default Nav;