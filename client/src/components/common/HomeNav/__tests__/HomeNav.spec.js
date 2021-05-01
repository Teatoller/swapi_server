import React from "react";
import renderer from "react-test-renderer";
import { HomeNav } from "../HomeNav";

describe("HomeNav", () => {
  it.skip("snapshot renders correctly", () => {
    const component = renderer.create(<HomeNav />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
