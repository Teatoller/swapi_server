import React from "react";
import renderer from "react-test-renderer";
import {HomeView} from "../HomeView";

describe("HomeView", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<HomeView />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
