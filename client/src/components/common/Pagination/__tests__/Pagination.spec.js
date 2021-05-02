import React from "react";
import renderer from "react-test-renderer";
import {Pagination} from "../Pagination";

describe("Pagination", () => {
  it("snapshot renders correctly", () => {
    const component = renderer.create(<Pagination/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
