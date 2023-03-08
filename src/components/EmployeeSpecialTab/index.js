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
            className="comp-img"
            src="https://media.licdn.com/dms/image/C5622AQHh3q6XiNNLMw/feedshare-shrink_800/0/1675868104474?e=1681344000&v=beta&t=fCrgRUuj3gVggTSEyXOFKU0v5lKMv1Y3rpDardQ7jYg"
            alt="img"
          />
        </div>
        <h1 className="tasks-heading">Tasks Section</h1>
        <div className="competed-tasks-tab" id="completedTasks">
          <h1>Completed Tasks</h1>
          <ul className="list-items">
            <li>Basic Web Pages</li>
            <li>Download Option for Resumes</li>
            <li>Employee Login Tab</li>
            <li>Basic CSS Part</li>
            <li>All functionalities for user interaction</li>
          </ul>
        </div>
      </>
    )
  }
}

export default EmployeeSpecialTab
