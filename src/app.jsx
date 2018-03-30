import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavSite from './components/nav-site';
// import PropTypes from 'prop-types';

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//       this.handleClick = () => {
//       this.props.onClickFunction(this.props.incrementValue);
//     };
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         +{this.props.incrementValue}
//       </button>
//     );
//   }
// }

// Button.propTypes = {
//   onClickFunction: PropTypes.func,
//   incrementValue: PropTypes.number
// };

// const Result = (props) => {
//   return (
//     <div>{props.counter}</div>
//   );
// };

// Result.propTypes = {
//   counter: PropTypes.number
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  //   this.incrementCounter = (incrementValue) => {
  //     this.setState((prevState) => ({
  //       counter: prevState.counter + incrementValue
  //     }));
  //   };
  // }

  render() {
    return (
      <Router>
        <div>
          <NavSite />
          <div>
            <h1>This is a dynamic page.</h1>
          </div>
          {/* <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} /> */}
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   onClickFunction: PropTypes.func,
//   incrementValue: PropTypes.number
// };

ReactDOM.render(<App />, document.getElementById("app"));
