import {Component} from 'react'
import EmployeeSpecialHeader from '../EmployeeSpecialHeader'
import './index.css'

class EmployeeSpecialTab extends Component {
  render() {
    return (
      <>
        <EmployeeSpecialHeader />
        <div>
          <img
            alt="company img"
            className="comp-img"
            src="https://media.licdn.com/dms/image/C5622AQHh3q6XiNNLMw/feedshare-shrink_800/0/1675868104474?e=1681344000&v=beta&t=fCrgRUuj3gVggTSEyXOFKU0v5lKMv1Y3rpDardQ7jYg"
          />
        </div>
      </>
    )
  }
}

export default EmployeeSpecialTab
