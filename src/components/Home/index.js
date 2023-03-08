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

    <section id="aboutUsSection" className="about-container">
      <div className="about-body">
        <p>About the Company</p>
        <h1>Empowering Business Transformations</h1>
        <p>
          Businesslike specialises in BPM and Pega Consulting. Our Business
          Process Management (BPM) consulting services provide IT solutions and
          services with a wide range of expertise that are on a global scale. We
          provide BPM services to clients across all sectors of any industry.{' '}
        </p>
      </div>
      <div>
        <img
          className="about-img"
          alt="pic"
          src="https://businesslikeglobal.com/wp-content/uploads/2022/10/01_Home_About_1.png"
        />
      </div>
    </section>

    <div className="solutions-container" id="serviceSection">
      <h1 className="sol-heading">Solutions for Every Business need </h1>
      <p className="sol-passage">
        If, as a traditional business, you’re looking to make a successful
        digital transformation for your company, you need the right tools to
        work for you.
      </p>
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
    <div className="carrers-section" id="careerSection">
      <h1 className="carrer-heading">Careers</h1>
      <p>
        If Your Passion Matches The Profession, We Are Open To Opportunities For
        You.
      </p>
      <p>
        Our focus is on endless possibilities. We help coach and groom people to
        professionals. If you are a big thinker and you value excellence and
        growth, come join our team. Our open positions will be updated in this
        page and would want you by our side to develop products and services
        that are in huge demand for the growing needs of customers worldwide.
      </p>
      <div className="Opportunities-sec">
        <div>
          <h3>Opportunities</h3>
          <p>
            Our process places great responsibility on employees and encourages
            growth and career development.
          </p>
        </div>
        <div>
          <h3>Reward</h3>
          <p>
            An opportunity for promotion within the organization, competitive
            salary and benefits, and an opportunity to make a difference.
          </p>
        </div>
        <div>
          <h3>Growing Salary</h3>
          <p>
            Who doesn’t want that! If you put in the time and hard work, you
            will be on your way to a stable career and great pay.
          </p>
        </div>
      </div>
    </div>
    <div className="news-section" id="newsSection">
      <h1 className="carrer-heading">Our blog, you should not missiIt</h1>
      <div className="all-our-block-card-section">
        <div className="our-blog-card">
          <img
            className="our-blog-img"
            alt="news img"
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/07/b8-780x433.jpg"
          />
          <div className="our-blog-body">
            <p>SOCIAL MEDIA</p>
            <h4>How Much Do Influencers Make Per Post?</h4>
            <p>
              Maybe you’re a small business looking to build brand awareness by
              getting an influencer to post. Or maybe you’re one of these
              experts yourself trying to figure out your influencer marketing
              budget.
            </p>
          </div>
        </div>
        <div className="our-blog-card">
          <img
            className="our-blog-img"
            alt="news img"
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/07/b6-780x433.jpg"
          />
          <div className="our-blog-body">
            <p className="">TECHNOLOGY</p>
            <h4>5 best anxiety apps for small business owners</h4>
            <p>
              Anxiety and stress have become common in everyday modern life,
              families, communities, and even the workplace. In fact, mental
              health problems have an impact on employers and businesses.
            </p>
          </div>
        </div>
        <div className="our-blog-card">
          <img
            className="our-blog-img"
            alt="news img"
            src="https://www.businesslikeglobal.com/wp-content/uploads/2022/07/b5-780x433.jpg"
          />
          <div className="our-blog-body">
            <p>GUEST BLOG</p>
            <h4>Productivity versus the perils of working from home</h4>
            <p>
              Well, four of those hours are between 8am and 12pm while my
              four-year-old is at nursery. (I have tried working while she is at
              home in the afternoon and have even become adept at singing the
              ‘Hog Dog Song’{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-section" id="contactSection">
      <h1 className="contact-heading">Contact</h1>
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
