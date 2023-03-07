import {Component} from 'react'
import './index.css'

class EmployeeLogin extends Component {
  renderEmployeeNameFeild = () => {
    console.log(1)
    return (
      <>
        <label htmlFor="employeeNameInput">Employee Name</label>
        <input id="employeeNameInput" type="text" />
      </>
    )
  }

  render() {
    return (
      <div className="employee-login-form-container">
        <img src="" alt="employee banner" />
        <form className="employee-form-container">
          <img
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/10/Web_logo_Final.png"
            alt="employee Login Logo"
          />
          <div>{this.renderEmployeeNameFeild()}</div>
        </form>
      </div>
    )
  }
}

export default EmployeeLogin
