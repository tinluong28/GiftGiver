import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

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
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person {this.props.gift.id}</Form.Label>
            <Form.Control
              className="person-input"
              onChange={e => this.setState({ person: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gift</Form.Label>
            <Form.Control
              className="present-input"
              onChange={e => this.setState({ present: e.target.value })}
            />
          </Form.Group>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
