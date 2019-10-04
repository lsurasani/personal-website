import React from "react"
import Layout from "../components/layout"
import { Card, Button } from 'semantic-ui-react'

const items = [
  {
    header: 'React Router 4',
    description: 'Thinking about migrating to React Router 4? This article describes the process.',
    extra: <a href="https://medium.com/@lesurasani/a-guide-to-upgrading-to-react-router-4-bc064f3cbdb9" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: 'Introduction to React Hooks',
    description: 'A Quick Introduction to React Hooks and how to use them.',
    extra: <a href="https://www.freecodecamp.org/news/lets-get-hooked-a-quick-introduction-to-react-hooks-9e8bc3fbaeac/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: 'Why New Developers Should Work at Small Startups',
    description: "I spent my first year of my career working at a small startup and gained a lot from it! Here's my case for why you should try it, too!",
    extra: <a href="https://www.freecodecamp.org/news/why-new-developers-should-work-at-a-small-startup-79790e2d93ff/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: 'Learn Serverless by Building your own Slack App',
    description: "In this article, we'll learn what serverless is and when you can use it. This tutorial walks you through creating a slack app using AWS Lambda.",
    extra: <a href="https://www.freecodecamp.org/news/make-a-serverless-slack-app/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  },
  {
    header: "What I've Learned in My First Year as a Software Engineer ",
    description: "It's been a full year since I started working full time as a software engineer, and I'd like to share what I've learned!",
    extra: <a href="https://www.freecodecamp.org/news/my-first-year-as-a-software-engineer/" target="_blank" rel="noopener noreferrer"><Button>Article</Button></a>
  }
]


export default () => (
  <Layout>
    <Card.Group centered items={items} />
  </Layout>
)
