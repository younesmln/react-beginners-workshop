import React, { Component } from "react";

class ListItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

class List extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.items.map(item => {
          return <ListItem text={item} />;
        })}
      </ul>
    );
  }
}

export default List;
