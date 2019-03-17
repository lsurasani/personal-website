<template>
    <div class="container">
        <div class="download">
            <a class="download-button-text" href="./../../assets/Surasani_Resume_2019.pdf" download="lekhasurasani_resume.pdf" target="_blank">
                <vs-button type="filled" class="download-button" color="#2c3e50" icon="save_alt">
                    Download as PDF
                </vs-button>
            </a>
        </div>
        <br>
        <div class="header">
            <h2>LEKHA SURASANI</h2>
            <h5><a href="mailto:lesurasani@gmail.com">lesurasani@gmail.com</a></h5>
            <h5>
                <a href="https://github.com/lsurasani" target="_blank">github.com/lsurasani</a> &#9679; 
                <a href="https://www.linkedin.com/in/lekha-surasani/" target="_blank">linkedin.com/in/lekha-surasani</a> &#9679
                <a href="https://lekhasurasani.com" target="_blank">lekhasurasani.com</a>
            </h5>
        </div>
        <hr>
        <div class="education">
            <h4>EDUCATION</h4>
            <div class="company-name">
                <h5 class="left">Georgia Institute of Technology - Atlanta, GA</h5>
                <h5 class="right">Aug. 2014 - Aug. 2018</h5>
            </div>
            <h5>B.S. Computer Science - Concentration in Theory and People</h5>
            <h5>Minor in Economics</h5>
        </div>
        <hr>
        <div class="work">
            <h4>WORK EXPERIENCE</h4>
            <div class="item">
                <div class="company-name">
                    <h5 class="left">DocuTAP - Atlanta, GA</h5>
                    <h5 class="right">Mar. 2019 - Present</h5>
                </div>
                <h5 class="position-title">Software Engineer</h5>
                <ul>
                    <li>Recently joined backend/API team</li>
                </ul>
            </div>
            <br>
            <div class="item">
                <div class="company-name">
                    <h5 class="left">Fitspot - Atlanta, GA</h5>
                    <h5 class="right">Sept. 2018 – Mar. 2019</h5>
                </div>
                <h5 class="position-title">Full Stack Developer</h5>
                <ul>
                    <li>Implementing new UI design throughout the web application using ReactJS</li>
                    <li>Overhauling, redesigning and re-implementing consumer onboarding process, including authentication process</li>
                    <li>Refactored, replaced, and optimized entire front-end code base, reducing code base while adding functionality</li>
                </ul>
            </div>
            <br>
            <div class="item">
                <h5 class="company-name"></h5>
                <div class="company-name">
                    <h5 class="left">Derm for Primary Care - Atlanta, GA</h5>
                    <h5 class="right">Jan. 2018 – May 2018</h5>
                </div>
                <h5 class="position-title">Software Engineer Intern</h5>
                <ul>
                    <li>Created comprehensive data analytics dashboard using D3.js to display statistics and site usage information to users</li>
                    <li>Implemented data analytics features in Django backend using Python and data from a PostgreSQL database</li>
                    <li>Redesigned and implemented a new landing page using CSS and JavaScript to give a more informative overview of the product</li>
                </ul>
            </div>
            <br>
            <div class="item">
                <div class="company-name">
                    <h5 class="left">VMware AirWatch - Sandy Springs, GA</h5>
                    <h5 class="right">May 2017 – Aug. 2017</h5>
                </div>
                <h5 class="position-title">Professional Services Operations Intern</h5>
                <ul>
                    <li>Created Python scripts to compile client data for more efficient analysis of customers</li>
                    <li>Used Python and PHP to develop more efficient web apps for customer facing teams to generate reports 50% faster</li>
                    <li>Integrated Zendesk and JIRA APIs into existing web apps to automate process of making changes to tickets and issues</li>
                </ul>
            </div>
            <br>
            <div class="item">
                <div class="company-name">
                    <h5 class="left">Kent Education Company - Atlanta, GA</h5>
                    <h5 class="right">May 2016 – Aug. 2016</h5>
                </div>
                <h5 class="position-title">Front End Developer Intern</h5>
                <ul>
                    <li>Used UI/ UX principles and HTML, CSS, and JavaScript to create the entire front-end of a web application</li>
                    <li>Implemented various libraries to visually enhance the web application, including Bootstrap, Semantic UI, and TokBox</li>
                    <li>Contributed immensely to high-level business decisions as one of three-person web app development team</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="research">
            <h4>RESEARCH</h4>
            <div class="item">
                <div class="company-name">
                    <h5 class="left">
                        Vertically Integrated Projects (VIP) – Intelligent Tutoring Systems - Atlanta, GA
                    </h5>
                    <h5 class="right">
                        Sept. 2015 – Dec. 2016
                    </h5>
                </div>
                <h5 class="position-title">Georgia Tech Student Researcher</h5>
                <ul>
                    <li>Increased efficiency of GUIs within app by converting them into JavaScript from MATLAB</li>
                    <li>Enhanced student experience with application by creating a dashboard in JavaScript and HTML to provide feedback of their progress</li>
                    <li>Facilitated communication between professor and team, wrote project timeline and reports on the team’s progress</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="activities">
            <h4>LEADERSHIP</h4>
            <div class="item">
                <div class="company-name">
                    <h5 class="left">HackGT, Inc. - Atlanta, GA</h5>
                    <h5 class="right">Sept. 2015 – Dec. 2017</h5>
                </div>
                <h5 class="position-title">Director of Operations, Director of Finance</h5>
                <ul>
                    <li>Led a 20-person team to carry out a variety events (hackathons) intended to promote Computer Science education and innovation</li>
                    <li>Created project timelines, assignments, and deadlines for 10+ events/projects for over 40 people</li>
                    <li>Allocated a $200,000 annual budget &amp; raised $250,000 in sponsorship</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="other">
            <h4>SKILLS</h4>
            <h5>Technical: HTML, CSS, JavaScript, ReactJS, Java, Python, AngularJS, NodeJS, GraphQL</h5>
            <h5>Languages: English (Native), Telugu (Basic), Spanish (Basic)</h5>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Resume',

}
</script>

<style scoped>
    a {
        color: grey;
    }

    h4 {
        text-decoration: underline;
    }

    .position-title {
        font-style: italic;
        font-weight: normal;
    }

    .company-name {
        font-weight: bold;
    }

    hr {
        margin: 10px 0;
    }

    .header {
        text-align: center;
    }

    .container {
        width: 75%;
        margin: 0 auto;
        text-align: left;
        height: calc(100% - 50px);
        overflow: scroll;
    }

    ul {
        margin-left: 15px;
    }

    .right {
        display: inline;
        float: right;
        font-style: italic;
    }

    .left {
        display: inline;
    }

    .download-button {
        margin-bottom: 15px;
        font-size: 16px;
    }

    .download-button > a {
        color: white;
    }

    .download {
        height: 45px;
    }

    br {
        line-height: 10px;
    }
</style>
