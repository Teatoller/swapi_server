import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";

describe("Home", () => {
  it.skip("snapshot renders correctly", () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
