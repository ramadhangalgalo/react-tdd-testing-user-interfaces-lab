// Your tests here
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text Hi, I'm _______", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of the user with appropriate alt text", () => {
  render(<App />);
  const profileImage = screen.getByAltText(/my profile picture/i);
  expect(profileImage).toBeInTheDocument();
  expect(profileImage).toHaveAttribute("src", "my-photo.jpg");
});

test("displays a second-level heading with the text About Me", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph with a short biography", () => {
  render(<App />);
  const bio = screen.getByText(/i am a software developer/i, { exact: false });
  expect(bio).toBeInTheDocument();
});

test("displays a link to the user's GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to the user's LinkedIn profile", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});