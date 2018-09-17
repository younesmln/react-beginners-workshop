import React from "react";
import { Link } from "react-router-dom";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h2>About Us : we are hack your future people</h2>
        <Link to="/users">all Users</Link>
        <Link to="/countdown">countdown</Link>
      </div>
    );
  }
}

export default AboutPage;
