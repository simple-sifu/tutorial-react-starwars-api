import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsChar: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people")
      .then((data) => data.json())
      .then((data) =>
        this.setState({ ...this.state, starWarsChar: data.results.slice(0) })
      );
  }
  render() {
    return (
      <div className="cardContainer">
        {this.state.starWarsChar.map((charObj) => {
          return (
            <div className="card">
              <ul>
                {Object.keys(charObj).map((key) => {
                  return <li> {`${key}: ${charObj[key]}`} </li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
