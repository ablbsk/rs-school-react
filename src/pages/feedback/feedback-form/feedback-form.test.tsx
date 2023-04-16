import { render, screen } from "@testing-library/react";
import React from "react";
import FeedbackForm from "./index";

describe("Feedback Form component", async () => {
  it("should have container", async () => {
    const { container } = render(<FeedbackForm addFeedback={() => null} />);
    expect(container.getElementsByClassName("feedback-form").length).toBe(1);
  });

  it("should have select", async () => {
    const { container } = render(<FeedbackForm addFeedback={() => null} />);
    expect(container.querySelector("select")).toBeInTheDocument();
  });

  it("should have input for file", async () => {
    const { container } = render(<FeedbackForm addFeedback={() => null} />);
    expect(container.querySelector(".feedback-form__file")).toBeInTheDocument();
  });

  it("should have radio for rating", async () => {
    const { container } = render(<FeedbackForm addFeedback={() => null} />);
    expect(container.getElementsByClassName("feedback-form__rating").length).toBe(3);
  });

  it("should have textarea for user opinion", async () => {
    const { container } = render(<FeedbackForm addFeedback={() => null} />);
    expect(container.querySelector(".feedback-form__textarea")).toBeInTheDocument();
  });

  it("should have submit", async () => {
    render(<FeedbackForm addFeedback={() => null} />);
    expect(screen.getByRole("button").getAttribute("type")).toEqual("submit");
  });
});
