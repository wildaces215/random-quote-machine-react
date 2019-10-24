import React, { Component } from "react";
import { Card, CardBody } from "shards-react";

class CardExport extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * (10 - 0 + 1)) + 0,
      checkNumber: 0,
      quotes: [
        "You know what’s better than building things up in your imagination? Building things up in real life.",
        "You don't get to choose not to pay a price, you only get to choose which price you pay",
        "There are things known and there are things unknown, and in between are the doors of perception.",
        "There are still many causes worth sacrificing for, so much history yet to be made.",
        "Who you are is defined by what you’re willing to struggle for.",
        "Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence. True friendship is a plant of slow growth, and must undergo and withstand the shocks of adversity before it is entitled to appellation.",
        "Whatever you are, be a good one",
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "The two most important days in your life are the day you are born and the day you find out why.",
        "Keep going becuase you did not come this far.",
        "Don't you dare underestimate the power of your own instinct."
      ],
      names: [
        "Ryan Holiday",
        "Dr. Jordan B. Peterson",
        "Aldous Huxley",
        "Michelle Obama",
        "Mark Manson",
        "George Washington",
        "Abraham Lincoln",
        "Maya Angelou",
        "Mark Twain",
        "Mick Kremling",
        "Barbara Corcoran"
      ]
    };
  }

  componentDidUpdate() {
    this.state.randomNumber = this.state.checkNumber;
    this.state.randomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

    console.log(this.state.randomNumber);
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
