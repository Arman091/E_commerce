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
            <li>
              <Link Link to="/update">
                Update Product
              </Link>
            </li>
            <li>
              <Link Link to="/logout">
                Logout
              </Link>
              <li>
                <Link Link to="/profile">
                  profile
                </Link>
              </li>
            </li>
          </li>
        </ul>
      </div>
    );
}

export default Nav;