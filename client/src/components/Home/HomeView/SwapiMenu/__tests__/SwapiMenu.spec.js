import React from "react";
import renderer from "react-test-renderer";
import SwapiMenu from "../SwapiMenu";

describe("SwapiMenu", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<SwapiMenu/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
