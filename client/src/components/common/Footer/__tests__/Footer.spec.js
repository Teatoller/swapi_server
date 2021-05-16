import React from "react";
import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe("Footer", () => {
  test('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it("snapshot renders correctly", () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
