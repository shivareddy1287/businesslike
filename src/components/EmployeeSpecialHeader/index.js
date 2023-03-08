import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const EmployeeSpecialHeader = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/')
  }
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
            <a className="nav-links" href="#completedTasks">
              Projects Completed
            </a>
          </li>

          <li>
            <a className="nav-links" href="#completedTasks">
              Projects NotCompleted
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn logoutbtn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
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
export default withRouter(EmployeeSpecialHeader)
