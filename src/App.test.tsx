import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders the scaffolded home route", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /luthub symphony/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/react \+ vite/i)).toBeInTheDocument();
    expect(screen.getByText(/convex ready/i)).toBeInTheDocument();
  });
});
