import React, { Component } from "react"
import { Link } from "react-router-dom"

class Experiences extends Component {
  render() {
    return (
      <div className="experiencesContainer">
        <div className="firstExperience">
          <h2>A fun-filled weekend with four Australian men</h2>
          <p>
            Went for about $920 in 2006. The men said they wouldn't pay for
            travel costs, but promised a weekend full of "some beers, some
            snags, some good conversation and a hell of a lot of laughs."
          </p>
          <a href="http://cgi.ebay.com.au/ws/eBayISAPI.dll?ViewItem&item=5659935599&ssPageName=MERCOSI-VI-ROSI-PR4-PCN-BIX">
            Is five a crowd?
          </a>
        </div>
        <div className="secondExperience">
          <h2>A lunch with Warren Buffet</h2>
          <p>
            Sold for $2.3 million in 2015. The chairman of Chinese gaming
            company Da Lian Zeus Entertainment placed the winning bid, and
            proceeds went to charity. (The previous year, a Singaporean
            businessman paid $2.2 million for the annual lunch.)
          </p>
          <a href="https://www.ebay.com/rpp/glide">Hungry?</a>
        </div>
        <div className="secondExperience">
          <h2>The Meaning of life</h2>
          <p>
            Sold for $3.26 in 2000. The seller wrote, "I have discovered the
            reason for our existence and will be happy to share this information
            with the highest bidder." Eight people were curious enough to place
            bids.
          </p>
          <a href="http://www.whattheheck.com/ebay/meaninglife.html">
            Need answers?
          </a>
        </div>
      </div>
    )
  }
}

export default Experiences
