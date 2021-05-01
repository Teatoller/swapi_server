import React from "react";
import renderer from "react-test-renderer";
import PaginationView from "../PaginationView";

describe("PaginationView", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<PaginationView/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
