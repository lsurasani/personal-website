import React, { useState }  from "react"
import 'semantic-ui-css/semantic.min.css'
import { Link } from "gatsby"
import { Button, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import { globalHistory } from '@reach/router'
import SEO from "../components/seo"

export default ({ children }) => {
  const initialPage = globalHistory.location.pathname === '/' ? 'home' : globalHistory.location.pathname.replace(/\//g, '')
  const [visible, setVisible] = useState(false);
  const [activeItem, setActive] = useState(initialPage);

  const handleItemClick = (name) => {
    setActive(name)
    setVisible(false)
  }

  return (
    <div>
      <SEO
        title={"Lekha Surasani's Personal Website"}
        description={"My personal website powered by GatsbyJS"}
      />
      <div className="menu-header">
        <div className="ui stackable grid">
          <div className="two wide column">
            <Button onClick={() => setVisible(!visible)}>Menu</Button>
          </div>
          <div className="twelve wide column">
            <p>Lekha Surasani</p>
          </div>
          <div className="icons two wide column">
            <a href="https://github.com/lsurasani/" target="_blank" rel="noopener noreferrer">
              <Icon name='github' />
            </a>
            <a href="https://www.linkedin.com/in/lekha-surasani/" target="_blank" rel="noopener noreferrer">
              <Icon name='linkedin' />
            </a>
            <a href="mailto:lesurasani@gmail.com" target="_blank" rel="noopener noreferrer">
              <Icon name='mail' />
            </a>
            <a href="https://twitter.com/lekhasurasani" target="_blank" rel="noopener noreferrer">
              <Icon name='twitter' />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='thin'
          >
            <Link to={`/`}>
              <Menu.Item active={activeItem === 'home'} onClick={() => {handleItemClick('home')}}>
                <Icon name='home' />
                Home
              </Menu.Item>
            </Link>
            <Link to={`/projects/`}>
              <Menu.Item active={activeItem === 'projects'} onClick={() => {handleItemClick('projects')}}>
                <Icon name='code' />
                Projects
              </Menu.Item>
            </Link>
            <Link to={`/writing/`}>
              <Menu.Item active={activeItem === 'writing'} onClick={() => {handleItemClick('writing')}}>
                <Icon name='write' />
                Writing
              </Menu.Item>
            </Link>
            <Link to={`/speaking/`}>
              <Menu.Item active={activeItem === 'speaking'} onClick={() => {handleItemClick('speaking')}}>
                <Icon name='microphone' />
                Speaking
              </Menu.Item>
            </Link>
            <Link to={`/resume/`}>
              <Menu.Item active={activeItem === 'resume'} onClick={() => {handleItemClick('resume')}}>
                <Icon name='file alternate' />
                Resume
              </Menu.Item>
            </Link>
            <Link to={`/blog/`}>
              <Menu.Item active={activeItem === 'blog'} onClick={() => {handleItemClick('blog')}}>
                <Icon name='keyboard' />
                Blog
              </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher dimmed={visible} onClick={() => visible ? setVisible(!visible) : null}>
              <Segment basic style={{ padding: '40px 15%' }}>
                { children }
              </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </div>
  )
}
