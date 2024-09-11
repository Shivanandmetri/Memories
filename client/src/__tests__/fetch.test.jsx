import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Fetch from "../TestFiles/fetch";
import { http, HttpResponse, setupServer } from "msw";

const server = setupServer(
  http.get("/https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json({ greeting: "hello there" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays greeting", async () => {
  render(<Fetch url="https://jsonplaceholder.typicode.com/todos" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("heading");

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("handles server error", async () => {
  server.use(
    http.get("https://jsonplaceholder.typicode.com/todos", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<Fetch url="https://jsonplaceholder.typicode.com/todos" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await screen.findByRole("alert");

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
