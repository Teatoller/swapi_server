import React from "react";
import renderer from "react-test-renderer";
import ErrorBoundary from "../ErrorBoundary";

describe("ErrorBoundary", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<ErrorBoundary/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
