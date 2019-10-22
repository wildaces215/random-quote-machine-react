import React, { Component } from "react";
import { Card, CardBody } from "shards-react";

class CardExport extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * Math.floor(3)),
      quotes: [
        "You know what’s better than building things up in your imagination? Building things up in real life.",
        "You don't get to choose not to pay a price, you only get to choose which price you pay",
        "There are things known and there are things unknown, and in between are the doors of perception.",
        "There are still many causes worth sacrificing for, so much history yet to be made.",
        "Who you are is defined by what you’re willing to struggle for."
      ],
      names: [
        "Ryan Holiday",
        "Dr. Jordan B. Peterson",
        "Aldous Huxley",
        "Michelle Obama",
        "Mark Manson"
      ]
    };
  }

  componentDidUpdate() {
    this.state.randomNumber = Math.floor(Math.random() * 5);
  }
  render() {
    return (
      <div className="">
        <Card>
          <CardBody>
            <h3 className="text">
              {this.state.quotes[this.state.randomNumber]}
            </h3>
            <h6 className="text">
              {this.state.names[this.state.randomNumber]}
            </h6>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default CardExport;
