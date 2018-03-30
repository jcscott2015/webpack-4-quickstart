/* eslint-disable no-console */
// Components
import React from 'react';
import PropTypes from 'prop-types';
import {routes} from '../config';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavSiteComponent = styled.div `
  height: 100%;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 80px;
  z-index: 10;
  border-right: 1px solid #e6e8e9;
  border-bottom: none;
  display: flex;
  flex-flow: column nowrap;
`;

const NavItemComponent = styled.div `
  color: ${props => props.active ? '#acacac' : '#c00'};
  cursor: pointer;
  fill: #acacac;
  font-size: 12px;
  height: 80px;
  text-align: center;
  padding: 25px 0px;
  transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
`;

// const StyledLink = styled(NavLink)`
//   color: palevioletred;
//   display: block;
//   margin: 0.5em 0;
//   font-family: Helvetica, Arial, sans-serif;

//   &:hover {
//     text-decoration: underline;
//   }
//   &.active {
//     color: red;
//   }
// `;
// const NavLink = ({ className, children }) => (   <a className={className}>
//  {children}   </a> )

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
      <NavItemComponent className="nav__item" id={this.props.id}>
        <NavLink to={this.href}>
          <img alt={this.props.altText} src={this.props.src}/>{this.props.text}
        </NavLink>
      </NavItemComponent>
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
    this.state = {
      data: []
    }
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
    data
      .sort(function (a, b) {
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
      <NavSiteComponent className="nav" role="navigation" aria-label="primary">
        {this
          .state
          .data
          .map(d => {
            if (typeof d.msg !== 'undefined') {
              this.sortNavigationByNum(d.msg, 'order');
              return (d.msg.map(nav => {
                return (<NavItem
                  key={nav.idx_nav_item}
                  id={"navitem" + nav.idx_nav_item}
                  src={this.iconPath + nav.name_id + ".svg"}
                  nameId={nav.name_id}
                  altText={nav.alt_text}
                  text={nav.text}/>);
              }));
            }
          })
}
      </NavSiteComponent>
    );
  }
}

export default NavSite;
