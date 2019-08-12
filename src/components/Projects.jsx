import React from 'react';
import { Card, Button } from 'semantic-ui-react'

const items = [
  {
    header: 'Serverless Slack App',
    description: "Ever want to respond to your coworkers with Ron Swanson Quotes? Now you can!",
    image: <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/RonSwanson.jpg" height="350" alt="Ron Swanson" />,
    extra: <div>
            <a href="https://github.com/lsurasani/ron-swanson-slack-app" target="_blank" rel="noopener noreferrer">
              <Button>Code</Button>
            </a>
          </div>
  },
  {
    header: 'Cats PWA',
    description: "It's cat pictures.",
    image: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1024px-Cat_November_2010-1a.jpg" height="350" alt="Cat" />,
    extra:  <div>
              <a href="https://github.com/lsurasani/pwa-example" target="_blank" rel="noopener noreferrer">
                <Button>Code</Button>
              </a>
              <a href="https://lsurasani.github.io/pwa-example/" target="_blank" rel="noopener noreferrer">
              <Button>Website</Button>
            </a>
            </div>
  },
  {
    header: 'MARTA Army Closest Bus Stop Project',
    description: "Grabs the user's closest MARTA bus stop and displays the schedule. Created for MARTA Army",
    image: <img src="https://pbs.twimg.com/profile_images/1146980956915585025/NE_vS0Ie_400x400.jpg" height="300" alt="MARTA Army"/>,
    extra:<div>
            <a href="https://github.com/lsurasani/marta-army-stops" target="_blank" rel="noopener noreferrer">
              <Button>Code</Button>
            </a>
            <a href="https://marta-army-stops.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <Button>Website</Button>
            </a>
          </div>
  }
]

const Projects = () => {
  return  (
    <div className="class-container">
      <Card.Group centered items={items} />
    </div>
  )
}

export default Projects;