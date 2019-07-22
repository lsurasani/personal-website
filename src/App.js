import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import Home from './components/Home';
import Writing from './components/Writing';
import Speaking from './components/Speaking';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Post from './components/Post';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="ui grid">
            <div className="two wide column">
              <Button className="menu-button" onClick={() => setVisible(!visible)}>Menu</Button>
            </div>
            <div className="twelve wide column">
              <p className="header-name">Lekha Surasani</p>
            </div>
            <div className="icons two wide column">
              <Icon name='twitter' />
              <Icon name='linkedin' />
              <Icon name='github' />
              <Icon name='mail' />
            </div>
          </div>
        </header>
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
              <Link to="/">
                <Menu.Item as='a' onClick={() => setVisible(!visible)}>
                  <Icon name='home' />
                  Home
                </Menu.Item>
              </Link>
              <Link to="/writing">
                <Menu.Item as='a' onClick={() => setVisible(!visible)}>
                  <Icon name='write' />
                  Writing
                </Menu.Item>
              </Link>
              <Link to="/speaking">
                <Menu.Item as='a' onClick={() => setVisible(!visible)}>
                  <Icon name='microphone' />
                  Speaking
                </Menu.Item>
              </Link>
              <Link to="/resume">
                <Menu.Item as='a' onClick={() => setVisible(!visible)}>
                  <Icon name='file' />
                  Resume
                </Menu.Item>
              </Link>
              <Link to="/blog">
                <Menu.Item as='a' onClick={() => setVisible(!visible)}>
                  <Icon name='sticky note' />
                  Blog
                </Menu.Item>
              </Link>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible} onClick={() => visible ? setVisible(!visible) : null}>
              <Segment basic>
                <Route path="/" exact component={Home} />
                <Route path="/writing" component={Writing} />
                <Route path="/speaking" component={Speaking} />
                <Route path="/resume" component={Resume} />
                <Route path="/blog" component={Blog} />
                <Route path="/blog/:id" component={Post} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    </Router>
  );
}

export default App;
