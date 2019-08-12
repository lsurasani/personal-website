import React from 'react';
import { Card, Button } from 'semantic-ui-react'

const items = [
  {
    header: 'React Router 4',
    description: 'Thinking about migrating to React Router 4? This article describes the process.',
    extra: <a href="https://www.freecodecamp.org/news/a-guide-to-upgrading-to-react-router-4/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: 'Introduction to React Hooks',
    description: 'A Quick Introduction to React Hooks and how to use them.',
    extra: <a href="https://www.freecodecamp.org/news/lets-get-hooked-a-quick-introduction-to-react-hooks-9e8bc3fbaeac/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: 'Why New Developers Should Work at Small Startups',
    description: "I spent my first year of my career working at a small startup and gained a lot from it. Here's my case for why you should try it, too!",
    extra: <a href="https://www.freecodecamp.org/news/why-new-developers-should-work-at-a-small-startup-79790e2d93ff/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: 'Learn Serverless By Making a Slack App',
    description: "Serverless is the industry's latest buzzword. This tutorial will take you step-by-step through the process of making a serverless slack app!",
    extra: <a href="https://www.freecodecamp.org/news/make-a-serverless-slack-app/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  }
]

const Writing = () => {
  return  (
    <div className="class-container">
      <Card.Group centered items={items} />
    </div>
  )
}

export default Writing;