import React from 'react';
import LekhaPic from './../assets/github_profile.png'

const Home = () => {
  return  (
    <div className="class-container">
      <div className="ui grid">
        <div className="eight wide column center five-margin">
          <img className="lekha-profile" alt="lekha surasani" src={LekhaPic} width="90%" />
          <h1>Lekha Surasani</h1>
        </div>
        <div className="eight wide column five-margin">
          <div class="profile-description">
            <p>
              Hi! I'm a software engineer at <a href="https://www.experityhealth.com/" target="_blank" rel="noopener noreferrer">Experity</a>. I'm interested in web technologies, startups, and promoting diversity and inclusion in tech.
            </p>
            <br />
            <p>
              In my spare time, I like <a href="https://medium.com/@lesurasani" target="_blank" rel="noopener noreferrer">writing</a>,
              <a href="https://www.goodreads.com/user/show/64315226-lekha-surasani" target="_blank" rel="noopener noreferrer">reading</a>,
              speaking, and watching TV. I have a two year old cat named Violet, and I love exploring Atlanta.
            </p>
            <br />
            <p>
              I recently graduated from Georgia Tech, where I majored in Computer Science with a minor in Economics.
              I was previously Director of Operations and Director of Finance of <a href="https://hack.gt" target="_blank" rel="noopener noreferrer">HackGT</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;