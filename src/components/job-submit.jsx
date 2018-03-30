/* eslint-disable no-console */
// Components
import React from 'react';

let formValues = {};

/**
 * Form Select Project List component
 * @extends React.Component
 */
class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.inputId = 'projectList';
    this.state = {
      value: '1',
      data: []
    };

    formValues[this.inputId] = this.state.value;

    this.state.data = [
      {
        "success": "",
        "msg": [
          {
            "idx": "1",
            "text": "Huracan"
          }
        ]
      }
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    formValues[this.inputId] = event.target.value;
  }

  /**
   * React API - render() method
   * Renders the Project List
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <select id={this.inputId} value={this.state.value} onChange={this.handleChange}>
        {
          this.state.data.map(d => {
            if (typeof d.msg !== 'undefined') {
              return (d.msg.map(project => {
                return (
                  <option key={project.idx} value={project.idx}>{project.text}</option>
                );
              }));
            }
          })
        }
      </select>
    );
  }
}

/**
 * Form Select Sub-Project List component
 * @extends React.Component
 */
class SubProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.inputId = 'subProjectList';
    this.state = {
      value: '1',
      data: []
    };

    formValues[this.inputId] = this.state.value;

    this.state.data = [
      {
        "success": "",
        "msg": [
          {
            "idx": "1",
            "text": "SW"
          },
          {
            "idx": "2",
            "text": "HW"
          }
        ]
      }
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    formValues[this.inputId] = event.target.value;
  }

  /**
   * React API - render() method
   * Renders the Sub-Project List
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <select id={this.inputId} value={this.state.value} onChange={this.handleChange}>
        {
          this.state.data.map(d => {
            if (typeof d.msg !== 'undefined') {
              return (d.msg.map(subproject => {
                return (
                  <option key={subproject.idx} value={subproject.idx}>{subproject.text}</option>
                );
              }));
            }
          })
        }
      </select>
    );
  }
}

/**
 * Form Select Build List component
 * @extends React.Component
 * TODO: Build: Needs to Grey out if Interactive is Selected.
 */
class BuildList extends React.Component {
  constructor(props) {
    super(props);
    this.inputId = 'BuildList';
    this.state = {
      value: '1',
      data: []
    };

    formValues[this.inputId] = this.state.value;

    this.state.data = [
      {
        "success": "",
        "msg": [
          {
            "idx": "1",
            "text": "?"
          }
        ]
      }
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    formValues[this.inputId] = event.target.value;
  }

  /**
   * React API - render() method
   * Renders the Build List
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <select id={this.inputId} value={this.state.value} onChange={this.handleChange}>
        {
          this.state.data.map(d => {
            if (typeof d.msg !== 'undefined') {
              return (d.msg.map(build => {
                return (
                  <option key={build.idx} value={build.idx}>{build.text}</option>
                );
              }));
            }
          })
        }
      </select>
    );
  }
}

/**
 * Form Select Runtime List component
 * @extends React.Component
 */
class RuntimeList extends React.Component {
  constructor(props) {
    super(props);
    this.inputId = 'runtimeList';
    this.state = {
      value: '1',
      data: []
    };

    formValues[this.inputId] = this.state.value;

    this.state.data = [
      {
        "success": "",
        "msg": [
          {
            "idx": "1",
            "text": "Interactive"
          },
          {
            "idx": "2",
            "text": "Batch"
          },
          {
            "idx": "3",
            "text": "Regression"
          }
        ]
      }
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    formValues[this.inputId] = event.target.value;
  }

  /**
   * React API - render() method
   * Renders the Runtime List
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <select id={this.inputId} value={this.state.value} onChange={this.handleChange}>
        {
          this.state.data.map(d => {
            if (typeof d.msg !== 'undefined') {
              return (d.msg.map(runtime => {
                return (
                  <option key={runtime.idx} value={runtime.idx}>{runtime.text}</option>
                );
              }));
            }
          })
        }
      </select>
    );
  }
}

/**
 * Job Submit Component
 * @extends React.Component
 */
class JobSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildListEl = document.getElementById('buildList');
  }

  // if (event.target.text === 'Interactive') {
  //   this.dependency.disabled = true;
  // } else {
  //   this.dependency.disabled = false;
  // }
  handleSubmit(event) {
    event.preventDefault();
    console.info(formValues);
    // Do Submit Stuff Here!
    // formValues has the post array.
  }

  /**
   * React API - render() method
   * Renders the Job Submit Form
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ProjectList />
        <SubProjectList />
        <RuntimeList />
        <BuildList />
        <input type="submit" value="Launch" />
      </form>
    );
  }
}

export default JobSubmit;
