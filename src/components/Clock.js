import React from "react";

let date = new Date().toLocaleTimeString();

setInterval(() => {
  date = new Date().toLocaleTimeString();
  // console.log(date);
}, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    console.log("done mounting");
    this.id = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      this.setState({ time: newTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    //console.log("rendering");
    return (
      <p className={this.props.completed ? "line" : ""}>
        {this.state.time}
        {this.props.completed ? "its done" : "still in progress"}
      </p>
    );
  }
}

export default Clock;
