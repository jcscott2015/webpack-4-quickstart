/* eslint-disable no-console */

import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.div`
  margin-left: 120px;
`;

/**
 * Logos Component
 * @extends React.Component
 */
class Logos extends React.Component {
  /**
   * React API - render() method
   * Renders the Logos
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <div className="header__logos-area">
        <img id="qualcomm" alt="Qualcomm" src="img/qualcomm.svg"/>
        <img id="slash" alt="Slash" src="img/slash.svg"/>
        <img id="sve" alt="SVE" src="img/sve-logo.svg"/>
      </div>
    );
  }
}

/**
 * User Component
 * @extends React.Component
 * TODO: Create dropdown with user features.
 */
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.state.data = [
      {
        "success": true,
        "user_name": "Scott, John C",
        "user_id": "c_johnsc",
        "acct_name": "c_johnsc",
        "nonce": "b1ce31d219357e646e612edb9b55e0f11cbfd1587dc89d263bac5cc4ec116909f9f8989be0cce1c5" +
        "0aca9f05ab09c2abcdc12eb3cac5743416c51f9023e90bed"
      }
    ];
  }

  /**
   * React API - render() method
   * Renders the User and User's Tools
   * @returns {JSX.Element} a JSX Expression
   */
  render() {
    return (
      <div className="header__user-area">
          {
            this.state.data.map((u, i) => {
              return (
                <span key={i}>{u.user_name}</span>
              )
            })
          }
      </div>
    );
  }
}

/**
 * Header Component
 */
const Header = () => {
  return (
    <HeaderComponent>
      <Logos/>
      <User/>
    </HeaderComponent>
  );
};

export default Header;
