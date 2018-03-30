// Components
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavSite from './components/nav-site';
import Header from './components/header';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: 120px;
`;

/**
 * Main App Component
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * React API - render() method
   * Renders the App
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <Router>
        <div>
          <NavSite />
          <Header />
          <Content>
            <Route exact path="/" render={() => <div>Dashboard</div>}/>
            <Route path="/jobs" render={() => <div>Jobs</div>}/>
          </Content>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
