import React from 'react';
import { Button } from 'semantic-ui-react';

const Resume = () => {
  return  (
    <div className="resume-container">
      <div className="download">
        <Button className="download-button" color="#2c3e50" icon="save_alt" href="https://www.dropbox.com/s/y6pawe1y9hs0056/Surasani_Resume_2019.pdf?dl=0" target="_blank">
            Download as PDF
        </Button>
      </div>
      <br />
      <div className="header">
        <h2 className="center">LEKHA SURASANI</h2>
        <h5 className="center"><a href="mailto:lesurasani@gmail.com">lesurasani@gmail.com</a></h5>
        <h5 className="center">
            <a href="https://github.com/lsurasani" target="_blank">github.com/lsurasani</a> &#9679; 
            <a href="https://www.linkedin.com/in/lekha-surasani/" target="_blank">linkedin.com/in/lekha-surasani</a> &#9679;
            <a href="https://lekhasurasani.com" target="_blank">lekhasurasani.com</a>
        </h5>
      </div>
      <hr />
      <div className="education">
        <h4>EDUCATION</h4>
        <div className="company-name">
          <h5 className="left">Georgia Institute of Technology - Atlanta, GA</h5>
          <h5 className="right">Aug. 2014 - Aug. 2018</h5>
        </div>
        <h5>B.S. Computer Science - Concentration in Theory and People</h5>
        <h5>Minor in Economics</h5>
      </div>
      <hr />
      <div className="work">
        <h4>WORK EXPERIENCE</h4>
        <div className="item">
          <div className="company-name">
            <h5 className="left">DocuTAP - Atlanta, GA</h5>
            <h5 className="right">Mar. 2019 - Present</h5>
          </div>
          <h5 className="position-title">Software Engineer</h5>
          <ul>
            <li>Recently joined backend/API team</li>
          </ul>
        </div>
        <br />
        <div className="item">
          <div className="company-name">
            <h5 className="left">Fitspot - Atlanta, GA</h5>
            <h5 className="right">Sept. 2018 – Mar. 2019</h5>
          </div>
          <h5 className="position-title">Full Stack Developer</h5>
          <ul>
            <li>Implementing new UI design throughout the web application using ReactJS</li>
            <li>Overhauling, redesigning and re-implementing consumer onboarding process, including authentication process</li>
            <li>Refactored, replaced, and optimized entire front-end code base, reducing code base while adding functionality</li>
          </ul>
        </div>
        <br />
        <div className="item">
          <h5 className="company-name"></h5>
          <div className="company-name">
            <h5 className="left">Derm for Primary Care - Atlanta, GA</h5>
            <h5 className="right">Jan. 2018 – May 2018</h5>
          </div>
          <h5 className="position-title">Software Engineer Intern</h5>
          <ul>
            <li>Created comprehensive data analytics dashboard using D3.js to display statistics and site usage information to users</li>
            <li>Implemented data analytics features in Django backend using Python and data from a PostgreSQL database</li>
            <li>Redesigned and implemented a new landing page using CSS and JavaScript to give a more informative overview of the product</li>
          </ul>
        </div>
        <br />
          <div className="item">
            <div className="company-name">
              <h5 className="left">VMware AirWatch - Sandy Springs, GA</h5>
              <h5 className="right">May 2017 – Aug. 2017</h5>
            </div>
            <h5 className="position-title">Professional Services Operations Intern</h5>
            <ul>
              <li>Created Python scripts to compile client data for more efficient analysis of customers</li>
              <li>Used Python and PHP to develop more efficient web apps for customer facing teams to generate reports 50% faster</li>
              <li>Integrated Zendesk and JIRA APIs into existing web apps to automate process of making changes to tickets and issues</li>
            </ul>
          </div>
          <br />
          <div className="item">
            <div className="company-name">
              <h5 className="left">Kent Education Company - Atlanta, GA</h5>
              <h5 className="right">May 2016 – Aug. 2016</h5>
            </div>
            <h5 className="position-title">Front End Developer Intern</h5>
            <ul>
              <li>Used UI/ UX principles and HTML, CSS, and JavaScript to create the entire front-end of a web application</li>
              <li>Implemented various libraries to visually enhance the web application, including Bootstrap, Semantic UI, and TokBox</li>
              <li>Contributed immensely to high-level business decisions as one of three-person web app development team</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="research">
          <h4>RESEARCH</h4>
          <div className="item">
            <div className="company-name">
              <h5 className="left">
                  Vertically Integrated Projects (VIP) – Intelligent Tutoring Systems - Atlanta, GA
              </h5>
              <h5 className="right">
                  Sept. 2015 – Dec. 2016
              </h5>
            </div>
            <h5 className="position-title">Georgia Tech Student Researcher</h5>
            <ul>
              <li>Increased efficiency of GUIs within app by converting them into JavaScript from MATLAB</li>
              <li>Enhanced student experience with application by creating a dashboard in JavaScript and HTML to provide feedback of their progress</li>
              <li>Facilitated communication between professor and team, wrote project timeline and reports on the team’s progress</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="activities">
          <h4>LEADERSHIP</h4>
          <div className="item">
            <div className="company-name">
              <h5 className="left">HackGT, Inc. - Atlanta, GA</h5>
              <h5 className="right">Sept. 2015 – Dec. 2017</h5>
            </div>
            <h5 className="position-title">Director of Operations, Director of Finance</h5>
            <ul>
              <li>Led a 20-person team to carry out a variety events (hackathons) intended to promote Computer Science education and innovation</li>
              <li>Created project timelines, assignments, and deadlines for 10+ events/projects for over 40 people</li>
              <li>Allocated a $200,000 annual budget &amp; raised $250,000 in sponsorship</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="other">
          <h4>SKILLS</h4>
          <h5>Technical: HTML, CSS, JavaScript, ReactJS, Java, Python, AngularJS, NodeJS, GraphQL</h5>
          <h5>Languages: English (Native), Telugu (Basic), Spanish (Basic)</h5>
        </div>
      </div>
  )
}

export default Resume;