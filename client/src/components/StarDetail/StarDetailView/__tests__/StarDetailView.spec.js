import React from "react";
import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import { StarDetailView } from "../StarDetailView";

describe("StarDetailView", () => {
  test('renders StartDetailView component', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Star Profile');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Star Profile')).toBeInTheDocument();
  });

  test('renders StartDetailView description', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Description');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('renders StartDetailView details', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Details');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  test('renders StartDetailView name:', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Name:');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Name:')).toBeInTheDocument();
  });

  test('renders StartDetailView Height:', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Height:');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Height:')).toBeInTheDocument();
  });

  test('renders StartDetailView Mass:', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Mass:');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Mass:')).toBeInTheDocument();
  });

  test('renders StartDetailView Gender:', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Gender:');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Gender:')).toBeInTheDocument();
  });

  test('renders StartDetailView Homeworld:', () => {
    render(<StarDetailView />);
    const linkElement = screen.getByText('Homeworld:');
    expect(linkElement).toBeInTheDocument();

    expect(screen.getByText('Homeworld:')).toBeInTheDocument();
  });

  test('renders StarDetailView role', () => {
    render(<StarDetailView />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it("snapshot renders correctly", () => {
    const component = renderer.create(<StarDetailView />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
