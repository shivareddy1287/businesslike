import {Link, withRouter} from 'react-router-dom'
import './index.css'
// import Cookies from 'js-cookie'

const Header = () => {
  console.log(1)
  return (
    <nav className="nav-header header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo "
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/10/Web_logo_Final.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <a className="nav-links" href="#homeSection">
              Home
            </a>
          </li>

          <li>
            <a className="nav-links" href="#aboutUsSection">
              About Us
            </a>
          </li>
          <li>
            <li>
              <a className="nav-links" href="#serviceSection">
                Service
              </a>
            </li>
          </li>
          <li>
            <li>
              <a className="nav-links" href="#domainSection">
                Domain
              </a>
            </li>
          </li>
          <li>
            <li>
              <a className="nav-links" href="#careerSection">
                Career
              </a>
            </li>
          </li>
          <li>
            <li>
              <a className="nav-links" href="#newsSection">
                News
              </a>
            </li>
          </li>
          <li>
            <li>
              <a className="nav-links" href="#contactSection">
                Contact Us
              </a>
            </li>
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
