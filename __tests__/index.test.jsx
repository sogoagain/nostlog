import { describe, it, expect, beforeEach } from "vitest";

import { render, screen, act, fireEvent } from "@testing-library/react";

import useStore from "@/stores";

import IndexPage from "@/app/[locale]/page";

import IntlProviders from "@/components/IntlProviders";

import messages from "@/i18n/messages/en.json";

const initialStoreState = useStore.getState();

describe("<IndexPage />", () => {
  beforeEach(async () => {
    render(
      <IntlProviders locale={"en"} messages={messages}>
        <IndexPage />
      </IntlProviders>,
    );
    act(() => {
      useStore.setState(initialStoreState, true);
    });
  });

  it("renders correctly with initial state", () => {
    expect(screen.getByText(/Number of bears: 0/)).toBeDefined();
    expect(screen.getByText(/Number of fishes: 0/)).toBeDefined();
  });

  it("adds a bear when the button is clicked", () => {
    act(() => {
      fireEvent.click(screen.getByText("Add a bear"));
    });

    expect(screen.getByText(/Number of bears: 1/)).toBeDefined();
  });

  it("adds a fish when the button is clicked", () => {
    act(() => {
      fireEvent.click(screen.getByText("Add a fish"));
    });

    expect(screen.getByText(/Number of fishes: 1/)).toBeDefined();
  });

  it("eats a fish when the button is clicked", () => {
    act(() => {
      fireEvent.click(screen.getByText("Add a bear"));
      fireEvent.click(screen.getByText("Add a fish"));
      fireEvent.click(screen.getByText("Add a fish"));
      fireEvent.click(screen.getByText("Eat a fish"));
    });

    expect(screen.getByText(/Number of bears: 1/)).toBeDefined();
    expect(screen.getByText(/Number of fishes: 1/)).toBeDefined();
  });
});
