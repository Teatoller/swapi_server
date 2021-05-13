import React from "react";
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderer from "react-test-renderer";
import { SwapiMenuView } from "../SwapiMenuView";

describe("SwapiMenuView", () => {
  test('renders SwapimenuView search input', () => {
    render(<SwapiMenuView />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders SwapimenuView button', () => {
    render(<SwapiMenuView />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText(/Searches for Luke/)).toBeNull();
  });

  it("snapshot renders correctly", () => {
    const component = renderer.create(<SwapiMenuView />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
