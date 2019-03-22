import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

const gift = shallow(<Gift />);

it("renders properly", () => {
  expect(gift).toMatchSnapshot();
});
