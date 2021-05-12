import React from "react";
import renderer from "react-test-renderer";
import {StarDetails} from "../StarDetails";

describe("StarDetails", () => {
  it.skip("snapshot renders correctly", () => {
    const component = renderer.create(<StarDetails/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});