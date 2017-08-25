import React, { Component } from "react"

class BodyParts extends Component {
  render() {
    return (
      <div className="bodypartsContainer">
        <div className="firstBody">
          <h2>Body Part 1</h2>
          <p>Description</p>
          <p>Link</p>
        </div>
        <div className="secondBody">
          <h2>Body Part 2</h2>
          <p>Description</p>
          <p>Link</p>
        </div>
        <div className="thirdBody">
          <h2>Body Part 3</h2>
          <p>Description</p>
          <p>Link</p>
        </div>
      </div>
    )
  }
}

export default BodyParts
