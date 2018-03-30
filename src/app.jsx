// Components
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavSite from './components/nav-site';
import Header from './components/header';
import Dashboard from './components/dashboard';
import { JobListView } from './components/job-list';

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
          <div className="content">
            <Route exact path="/" component={Dashboard} />
            <Route path="/jobs" component={JobListView} />
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
