import React from "react";
import renderer from "react-test-renderer";
import {PeopleQuery} from "../PeopleQuery";

describe("PeopleQuery", () => {
  it.skip("snapshot renders correctly", () => {
    const component = renderer.create(<PeopleQuery/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
