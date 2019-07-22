import React from 'react';
import { Card, Button } from 'semantic-ui-react'



const items = [
  {
    header: 'React Hooks',
    description: "Let's get hooked! In this talk, I introduce the group to React Hooks with some examples.",
    extra: <div>
            <a href="https://github.com/lsurasani/react-hooks-examples" target="_blank" rel="noopener noreferrer">
              <Button>Code</Button>
            </a>
            <a href="https://docs.google.com/presentation/d/1sae6auAGUVhg64KLwyl9J1cUoiqhbO0MP6UXED49flk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button>Presentation</Button>
            </a>
          </div>
  },
  {
    header: 'All About PWAs',
    description: 'Learn more about what a PWA is and how to make one. We’ll talk about some of the disadvantages of using a PWA, and whether using a PWA is right for you.',
    extra:  <div>
              <a href="https://github.com/lsurasani/pwa-example" target="_blank" rel="noopener noreferrer">
                <Button>Code</Button>
              </a>
              <a href="https://docs.google.com/presentation/d/171XaOrC2a2HkBcbMtNgMgV6CKrsxjLSKDRJRh24QxEQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button>Presentation</Button>
              </a>
            </div>
  },
  {
    header: 'Advanced Topics in React - WeRockITConf, May 2019',
    description: "Learn more about Hooks, Suspense, Context, and HOC's!",
    extra:<div>
            <a href="https://stackblitz.com/@lsurasani" target="_blank" rel="noopener noreferrer">
              <Button>Code</Button>
            </a>
            <a href="https://docs.google.com/presentation/d/1B4oHPEU9Wm3S9DPCgnPjAuMbDSl0bPGPyahwaBbNuyM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button>Presentation</Button>
            </a>
          </div>
  },
  {
    header: 'Advanced Topics in React - WeRockITConf, May 2019',
    description: "Learn more about Hooks, Suspense, Context, and HOC's!",
    extra:  <div>
              <a href="https://docs.google.com/presentation/d/1qjkEgEp9Upbdw-Q5tTLCmum4rmruoAW7Q5f63kSA__o/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button>Presentation</Button>
              </a>
            </div>
  }
]

const Speaking = () => {
  return  (
    <div className="class-container">
      <Card.Group centered items={items} />
    </div>
  )
}

export default Speaking;