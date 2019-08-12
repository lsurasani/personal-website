import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import Home from './components/Home';
import Writing from './components/Writing';
import Speaking from './components/Speaking';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Post from './components/Post';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

class App extends Component {

  state = {
    visible: false,
    activeItem: window.location.pathname.substring(1,),
    response: '',
    post: '',
    responseToPost: '',
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };

  render() {
    const { visible, activeItem } = this.state

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="ui stackable grid">
              <div className="two wide column">
                <Button className="menu-button" onClick={() => this.setState({ visible: !visible })}>Menu</Button>
              </div>
              <div className="twelve wide column">
                <p className="header-name">Lekha Surasani</p>
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
                onClick={() => this.setState({ visible: !visible })}
                width='thin'
              >
                <Link to="/">
                  <Menu.Item as='a' active={activeItem === 'home'} onClick={() => this.setState({ activeItem: 'home' })}>
                    <Icon name='home' />
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/projects">
                  <Menu.Item as='a' active={activeItem === 'projects'} onClick={() => this.setState({ activeItem: 'projects' })}>
                    <Icon name='code branch' />
                    Projects
                  </Menu.Item>
                </Link>
                <Link to="/writing">
                  <Menu.Item as='a' active={activeItem === 'writing'} onClick={() => this.setState({ activeItem: 'writing' })}>
                    <Icon name='write' />
                    Writing
                  </Menu.Item>
                </Link>
                <Link to="/speaking">
                  <Menu.Item as='a' active={activeItem === 'speaking'} onClick={() => this.setState({ activeItem: 'speaking' })}>
                    <Icon name='microphone' />
                    Speaking
                  </Menu.Item>
                </Link>
                <Link to="/resume">
                  <Menu.Item as='a' active={activeItem === 'resume'} onClick={() => this.setState({ activeItem: 'resume' })}>
                    <Icon name='file alternate outline' />
                    Resume
                  </Menu.Item>
                </Link>
                <Link to="/blog">
                  <Menu.Item as='a' active={activeItem === 'blog'} onClick={() => this.setState({ activeItem: 'blog' })}>
                    <Icon name='keyboard' />
                    Blog
                  </Menu.Item>
                </Link>
              </Sidebar>
  
              <Sidebar.Pusher dimmed={visible} onClick={() => visible ? this.setState({ visible: !visible }) : null}>
                <Segment basic>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/writing" component={Writing} />
                    <Route path="/speaking" component={Speaking} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/blog/:id" component={Post} />
                    <Route component={NotFound} />
                  </Switch>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
