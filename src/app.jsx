import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// const App = () => {
//   return (
//     <div>
//       <h1>This is a dynamic page.</h1>
//     </div>
//   );
// };
// export default App;
// ReactDOM.render(<App />, document.getElementById("app"));

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };
}

  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

Button.propTypes = {
  onClickFunction: PropTypes.func,
  incrementValue: PropTypes.number
};

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

Result.propTypes = {
  counter: PropTypes.number
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.incrementCounter = (incrementValue) => {
      this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
      }));
    };
  }

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

App.propTypes = {
  onClickFunction: PropTypes.func,
  incrementValue: PropTypes.number
};

ReactDOM.render(<App />, document.getElementById("app"));
