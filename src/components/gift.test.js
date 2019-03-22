import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

const gift = shallow(<Gift />);

it("renders properly", () => {
  expect(gift).toMatchSnapshot();
});

it("initialize a person and present in `state`", () => {
  expect(gift.state()).toEqual({ person: "", present: "" });
});
