import React from "react";
import renderer from "react-test-renderer";
import {PeopleQueryView} from "../PeopleQueryView";

describe("PeopleQueryView", () => {
  it.skip("snapshot renders correctly", () => {
    const component = renderer.create(<PeopleQueryView/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
