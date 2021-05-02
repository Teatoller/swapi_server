import React from "react";
import renderer from "react-test-renderer";
import {PeopleQueryFunc} from "../PeopleQueryFunc";

describe("PeopleQueryFunc", () => {
  it.skip("snapshot renders correctly", () => {
    const component = renderer.create(<PeopleQueryFunc/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
