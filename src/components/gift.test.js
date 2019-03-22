import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("App", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initialize a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the person input", () => {
    const person = "Uncle";
    beforeEach(() => {
      gift
        .find(".person-input")
        .simulate("change", { target: { value: person } });
    });

    it("update the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("when typing into the present input", () => {
    const present = "Goft Cub";
    beforeEach(() => {
      gift
        .find(".present-input")
        .simulate("change", { target: { value: present } });
    });

    it("update the present in `state`", () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe("when clicking the `Remove Gift`", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
