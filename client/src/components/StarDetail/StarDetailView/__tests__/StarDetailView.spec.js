import React from "react";
import renderer from "react-test-renderer";
import {StarDetailView} from "../StarDetailView";

describe("StarDetailView", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<StarDetailView/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
