import React from "react";
import { Link } from "react-router-dom";

class HYFUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    console.log("fetching data");
    fetch("https://api.github.com/orgs/hackyourfuture-cph/members")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>
            <Link to={`/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HYFUsers;
