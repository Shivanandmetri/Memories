import React from "react";
import { render, screen } from "@testing-library/react";
import Testing from "../TestFiles/Testing";
import "@testing-library/jest-dom";

describe("render text memories", () => {
  it("test", () => {
    const { container } = render(<Testing />);
    console.log(container.innerHTML);
    expect(screen.getByText(/Testing/)).toBeInTheDocument();
  });

  it("finnd the color of the div", () => {
    const { container } = render(<Testing />);
    console.log(container.innerHTML);
    expect(screen.queryByText(/Shivanand/)).not.toBeInTheDocument();
  });
});
