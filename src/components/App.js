import React, { Component } from "react";
import Gift from "../components/Gift";
import { max_number } from "../helper";
class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    const { gifts } = this.state;
    gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  };
  render() {
    return (
      <div className="container m-auto">
        <div className="jumbotron">
          <h2>Gift Giver</h2>
          <p>
            <i>Create your onw gift list for your love ones</i>
          </p>
          <button
            className="btn-add btn btn-md btn-primary d-inline"
            onClick={this.addGift}
          >
            Add Gift
          </button>
        </div>

        <div className="gift-list container">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
