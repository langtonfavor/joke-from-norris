import React, { Component } from "react";
import "../navbar/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav class="nav">
        <a href="#" className="nav__title">
          Jokes from Chuck Norris
        </a>
      </nav>
    );
  }
}

export default Navbar;
