/* eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';
import { routes } from '../config';
import { NavLink } from 'react-router-dom';

  /**
   * Navigation Item component
   * @extends React.Component
   * TODO: Add slideout effect for NavItems with href of "#".
   */
  class NavItem extends React.Component {
    constructor(props) {
      super(props);
      this.props.altText;
      this.props.nameId;
      this.props.text;
      this.props.id;
      this.props.src;
      this.href = this.getRoute(this.props.nameId);
      // this.handleClick = () => {   this     .props
      // .onClickFunction(this.props.incrementValue); };
    }

    /**
     * Looks for key in routers object.
     * @param {str} nameId
     * @returns route path or '#'.
     */
    getRoute(nameId) {
      if (routes.hasOwnProperty(nameId)) {
        return routes[nameId];
      }
      return '#';
    }

    /**
     * React API - render() method
     * Renders the Navigation Item
     * @returns {JSX.Element} a JSX Expression
     */
    render() {
      return (
        <div id={this.props.id}>
        <NavLink to={this.href}>
          <img alt={this.props.altText} src={this.props.src}/>{this.props.text}
        </NavLink>
      </div>
    //  onClick={this.handleClick}
  );
}
}

NavItem.propTypes = {
  altText: PropTypes.string,
  id: PropTypes.string,
  // iconPath: PropTypes.string, incrementValue: PropTypes.number,
  // onClickFunction: PropTypes.func,
  nameId: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string
};

/**
 * Site Navigation component
 * @extends React.Component
 */
class NavSite extends React.Component {
  constructor(props) {
    super(props);
    this.iconPath = "img/icons/";
    this.state = { data: [] }
    this.state.data = [
      {
        "success": true,
        "msg": [
          {
            "idx_nav_item": 1,
            "text": "Dashboard",
            "alt_text": "Dashboard",
            "name_id": "dashboard",
            "order": 1
          }, {
            "idx_nav_item": 5,
            "text": "Feedback",
            "alt_text": "Feedback",
            "name_id": "feedback",
            "order": 4
          }, {
            "idx_nav_item": 3,
            "text": "Jobs",
            "alt_text": "Jobs",
            "name_id": "jobs",
            "order": 3
          }, {
            "idx_nav_item": 4,
            "text": "Help",
            "alt_text": "Help",
            "name_id": "help",
            "order": 5
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
  sortNavigationByNum(data, key) {
    data.sort(function (a, b) {
      return a[key] > b[key];
    });
    return JSON.stringify(data, 0);
  }

  /**
   * React API - render() method
   * Renders the Navigation
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <nav>
        {
          this.state.data.map(d => {
            if (typeof d.msg !== 'undefined') {
              this.sortNavigationByNum(d.msg, 'order');
              return(
                d.msg.map(nav => {
                return (
                  <NavItem
                    key={nav.idx_nav_item}
                    id={"navitem" + nav.idx_nav_item}
                    src={this.iconPath + nav.name_id + ".svg"}
                    nameId={nav.name_id}
                    altText={nav.alt_text} text={nav.text} />
                );
              })
            );
          }
        })
      }
      </nav>
    );
  }
}

export default NavSite;
