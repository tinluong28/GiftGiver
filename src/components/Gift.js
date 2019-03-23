import React, { Component } from "react";

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: ""
    };
  }
  render() {
    return (
      <div className="col-md-4 mb-3">
        <form>
          <div className="form-group">
            <label>
              <strong>Person #{this.props.gift.id}</strong>
            </label>
            <input
              className="person-input form-control"
              onChange={e =>
                this.setState({ person: e.target.value.toUpperCase() })
              }
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Gift</strong>
            </label>
            <input
              className="present-input form-control"
              onChange={e => this.setState({ present: e.target.value })}
            />
          </div>
        </form>
        <button
          className="btn-remove btn btn-sm btn-danger mb-5"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove
        </button>
        <hr />
      </div>
    );
  }
}

export default Gift;
