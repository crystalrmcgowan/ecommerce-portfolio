import React, { Component } from "react"

class Food extends Component {
  render() {
    return (
      <div className="foodContainer">
        <div className="firstFood">
          <h2>A Dorito Shaped Like The Pope's Hat </h2>
          <p>
            Sold for $1,209 in 2005. The buyer? Online casino GoldenPalace.com,
            also known for buying the Virgin Mary grilled cheese.
          </p>
          <a href="http://cgi.ebay.com/ws/eBayISAPI.dll?ViewItem&category=1467&item=5565234667&rd=1&ssPageName=WDVW">
            Feeling Bold?
          </a>
        </div>
        <div className="secondFood">
          <h2>A Box of 10 Twinkies</h2>
          <p>
            Sold for $59.99 back in 2012, following the announcement that
            Hostess was closing its factories. Panic spread, and many
            Twinkie-hoarding entrepreneurs hoped to cash in.
          </p>
          <a href="https://www.ebay.com/sch/sis.html?_itemId=321024827871&_nkw=1+box+of+Hostess+Twinkies&_trksid=p2047675.m4099.l9146">
            Creme Filling, Anyone?
          </a>
        </div>
        <div className="thirdFood">
          <h2>A Corn Flake Shaped Like Illinois</h2>
          <p>
            Went for $1,350 in 2008. Two sisters from Virginia (not Illinois)
            put it up for sale, and the owner of a trivia website bought it for
            his traveling museum.
          </p>
          <a href="http://www.nbcnews.com/id/23756725/ns/us_news-weird_news/t/illinois-shaped-corn-flake-sells/">
            Bring Out The Tiger?
          </a>
        </div>
      </div>
    )
  }
}

export default Food
