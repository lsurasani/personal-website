import React from "react"
import Layout from "../components/layout"
import { Card, Button } from 'semantic-ui-react'

const items = [
  {
    header: 'Ron Swanson Slack app',
    description: "Use this Ron Swanson slack app to respond to your coworkers with quotes from Parks and Rec's Ron Swanson",
    extra: <a href="https://github.com/lsurasani/ron-swanson-slack-app" target="_blank" rel="noopener noreferrer"><Button>Code</Button></a>
  },
  {
    header: 'PWA with Cats',
    description: "It's just pictures of cats",
    extra: <a href="https://github.com/lsurasani/pwa-example" target="_blank" rel="noopener noreferrer"><Button>Code</Button></a>
  },
  {
    header: 'MARTA Army Stops',
    description: "Realtime location-based MARTA bus stops app. Uses MARTA's api to show buses next estimated arrival time.",
    extra: <a href="https://github.com/lsurasani/marta-army-stops" target="_blank" rel="noopener noreferrer"><Button>Code</Button></a>
  }
]

export default () => (
  <Layout>
    <Card.Group centered items={items} />
  </Layout>
)
