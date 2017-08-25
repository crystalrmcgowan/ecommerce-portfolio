import React, { Component } from "react"

class Apparel extends Component {
  render() {
    return (
      <div className="apparelContainer">
        <div className="firstApparel">
          <h2>Apparel 1</h2>
          <p>Description</p>
          <p>Link</p>
        </div>
        <div className="secondApparel">
          <h2>Apparel 2</h2>
          <p>Description</p>
          <p>Link</p>
        </div>
        <div className="secondApparel">
          <h2>Apparel 3</h2>
          <p>Description</p>
          <p>Link</p>
        </div>
      </div>
    )
  }
}

export default Apparel
