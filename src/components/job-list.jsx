/* eslint-disable no-console */
// Components
import React from 'react';
import JobSubmit from './job-submit';

/**
 * Job List component
 * @extends React.Component
 */
export class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.iconPath = "img/icons/";
    this.state = {
      data: []
    }
    this.state.data = [
      {
        "success": true,
        "msg": [
          {
            "job_id": "573376",
            "rumi": "san-s4b-39265",
            "user": "c_johnsc",
            "job_status": "Running",
            "job_name": "sleep",
            "start_time": "2018-03-29\u00a018:25:36",
            "submit_time": "2018-03-29\u00a018:25:34"
          }, {
            "job_id": "573377",
            "rumi": "-",
            "user": "c_johnsc",
            "job_status": "Pending",
            "job_name": "sleep",
            "start_time": "-",
            "submit_time": "2018-03-29\u00a018:25:37"
          }
        ]
      }
    ];
  }

  /**
   * Sort JSON array by key number value.
   * @param {obj} data
   * @param {str} key - key value must be a number
   * @returns new JSON object.
   */
  sortJobsByNum(data, key) {
    data
      .sort(function (a, b) {
        return a[key] > b[key];
      });
    return JSON.stringify(data, 0);
  }

  /**
   * React API - render() method
   * Renders the JobList
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <table className="content__job-list-table">
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Job Name</th>
            <th>Job Status</th>
            <th>Start Time</th>
            <th>Submit Time</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.data.map(d => {
            if (typeof d.msg !== 'undefined') {
              return (d.msg.map(job => {
                return (
                  <tr key={job.job_id}>
                    <td>{job.job_id}</td>
                    <td>{job.job_name}</td>
                    <td>{job.job_status}</td>
                    <td>{job.start_time}</td>
                    <td>{job.submit_time}</td>
                  </tr>
                );
              }));
            }
          })
        }
        </tbody>
      </table>
    );
  }
}

/**
 * JobListView Component
 */
export const JobListView = () => {
  return (
    <div className="content__job-list">
      <h2>Submit Job</h2>
      <JobSubmit />
      <h2>Jobs</h2>
      <JobList />
    </div>
  );
};

/**
 * DashboardJobList Component
 */
export const DashboardJobList = () => {
  return (
    <div className="dashboard__job-list">
      <h2>My Jobs</h2>
      <JobList />
    </div>
  );
};
