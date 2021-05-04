import React from "react";
import renderer from "react-test-renderer";
import Error404 from "../Error";

describe("Error404", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<Error404/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
