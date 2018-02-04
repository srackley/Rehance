import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <NavLink to="/">Rehance</NavLink>
        <a className="hamburger-menu" >Hamburger</a>
        <a className="search" href="/search" >Magnifying Glass</a>
      </nav>
    );
  }
}
