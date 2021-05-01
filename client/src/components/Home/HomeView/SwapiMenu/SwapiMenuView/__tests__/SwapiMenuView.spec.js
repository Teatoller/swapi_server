import React from "react";
import renderer from "react-test-renderer";
import {SwapiMenuView} from "../SwapiMenuView";

describe("SwapiMenuView", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<SwapiMenuView/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
