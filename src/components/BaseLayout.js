import React, { Component } from "react"
import { NavLink } from "react-router-dom"

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apparel">Apparel</NavLink>
            </li>
            <li>
              <NavLink to="/bodyParts">Body Parts</NavLink>
            </li>
            <li>
              <NavLink to="/experiences">Experiences</NavLink>
            </li>
            <li>
              <NavLink to="/food">Food</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {this.props.children}
        </nav>
      </div>
    )
  }
}
