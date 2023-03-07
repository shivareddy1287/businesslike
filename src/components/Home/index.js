// import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="top-container" id="homeSection">
      <div className="top-left-container">
        <h1 className="top-heading">Capitaize the investments on PEGA</h1>
        <p>
          pega has enabled the higher customer fulfillment, lower costs and
          increased the customer life time rate
        </p>
        <button type="button" className="top-button">
          Find Your Solutions
        </button>
      </div>
      <div>
        <img
          className="top-img"
          alt="graph bar"
          src="https://www.businesslikeglobal.com/wp-content/uploads/2022/11/01_Home_Banners_Images_1.png"
        />
      </div>
    </div>
    <div id="domainSection" className="domain-section">
      <h1 className="domain-heading">Domains</h1>
      <div className="domain-part">
        <div>
          <img
            className="domain-img"
            alt="img"
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/11/04_Domain_1.jpg"
          />
        </div>
        <div className="domain-body">
          <h1>Banking & Financials</h1>
          <p>
            The changing market scenario is demanding banking and financial
            services enterprises to reconstruct their business models and
            technologies. At Instasmart, we help the financial sector through
            our Pega tailored framework. We have a deep Pega expertise that
            helps us conceptualize and design end-to-end products. We enhance
            customer experience and satisfaction by simplifying banking for
            them. Pega banking framework helps in reducing the cost and
            turnaround time We cover retail banking, mortgages, consumer
            finance, banking, cards & payments, asset and wealth management, and
            many more.
          </p>
        </div>
      </div>
      <div className="domain-part">
        <div className="domain-body">
          <h1>Healthcare</h1>
          <p>
            We work tirelessly towards improving healthcare through our BPM
            software. We help healthcare providers to leverage digital solutions
            to improve the quality of healthcare. We offer personalized
            healthcare solutions through our Pega technologies. Our end-to-end
            healthcare sector services can benefit many managements with
            digitalization. Our operating models, healthcare IT solutions, and
            customer management processes using Pega platforms can bring the
            change you desire.
          </p>
        </div>
        <div>
          <img
            className="domain-img"
            alt="img"
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/11/04_Domain_2.jpg"
          />
        </div>
      </div>
    </div>
    <div className="contact-section" id="contactSection">
      <h1 className="text-center">Contact</h1>
      <div className="contact-sub-sections">
        <div className="sub-section">
          <h3 className="sub-name">Services</h3>
          <ul>
            <li>PEGA Consulting</li>
            <li>Outsystems</li>
            <li>React js</li>
            <li>Quality Management</li>
            <li>Managed Services</li>
            <li>Strategic Apps</li>
            <li>Advisory Services</li>
          </ul>
        </div>
        <div className="follow-us-section sub-section">
          <h3>Follow Us</h3>
          <div className="d-flex full-icon">
            {/* <i className="fa-brands fa-facebook icons"></i> */}
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className="d-flex full-icon icons">
            {/* <i className="fa-brands fa-twitter"></i> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
            >
              Twitter
            </a>
          </div>
          <div className="d-flex full-icon">
            {/* <i className="fa-brands fa-google icons"></i> */}
            <a
              target="_blank"
              href="https://www.businesslikeglobal.com/"
              rel="noreferrer"
            >
              Google
            </a>
          </div>
          <div className="d-flex full-icon">
            {/* <i className="fa-brands fa-linkedin icons"></i> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/businesslike-software-solutions/"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="sub-section">
          <h3 className="sub-name">Discosure</h3>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
            <li>Disclimer</li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default Home
