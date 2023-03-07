import {Component} from 'react'
import Header from '../Header'
import './index.css'

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div id="aboutUsSection" className="about-container">
            <div className="about-body">
              <p>About the Company</p>
              <h1>Empowering Business Transformations</h1>
              <p>
                Businesslike specialises in BPM and Pega Consulting. Our
                Business Process Management (BPM) consulting services provide IT
                solutions and services with a wide range of expertise that are
                on a global scale. We provide BPM services to clients across all
                sectors of any industry.{' '}
              </p>
            </div>
            <div>
              <img
                className="about-img"
                alt="pic"
                src="https://businesslikeglobal.com/wp-content/uploads/2022/10/01_Home_About_1.png"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About
