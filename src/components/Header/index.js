import {Link, withRouter} from 'react-router-dom'

// import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  console.log(1)
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/10/Web_logo_Final.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Domains
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              News
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/login" className="nav-link">
              <button type="button" className="logout-desktop-btn">
                Employee Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
