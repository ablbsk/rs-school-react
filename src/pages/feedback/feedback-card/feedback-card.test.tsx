import { render, screen } from "@testing-library/react";
import React from "react";
import FeedbackCard from "./index";

describe("Feedback Card component", async () => {
  const feedback = {
    continents: "europe",
    birthday: "2023-03-10",
    email: "mortysmith@gmail.test",
    isConfirm: true,
    opinion: "This is testing opinion of feedback. Get back!",
    picture: "blob:http://localhost:5173/e58a8ba1-62df-46f6-bc4b-e50494ef6a32",
    rating: "maybe",
    username: "mortyc",
  };

  it("should have container", async () => {
    const { container } = render(<FeedbackCard feedback={feedback} />);
    expect(container.getElementsByClassName("feedback-card").length).toBe(1);
  });

  it("should have picture", async () => {
    render(<FeedbackCard feedback={feedback} />);
    expect(screen.getByRole("img").getAttribute("src")).toEqual(feedback.picture);
  });

  it("should have header", async () => {
    render(<FeedbackCard feedback={feedback} />);
    expect(await screen.getByRole("heading", { level: 3 })).toHaveTextContent(feedback.username);
  });

  it("should have subheader", async () => {
    render(<FeedbackCard feedback={feedback} />);
    expect(await screen.getByRole("heading", { level: 4 })).toHaveTextContent(feedback.email);
  });

  it("should have rating 'maybe'", async () => {
    const { container } = render(<FeedbackCard feedback={feedback} />);
    expect(container.getElementsByClassName("icon--smile-maybe").length).toBe(1);
  });

  it("should have user opinion", async () => {
    const { container } = render(<FeedbackCard feedback={feedback} />);
    expect(container.getElementsByClassName("feedback-card__description").length).toBe(1);
  });
});
