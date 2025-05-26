// In types.d.ts or similar
import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

describe('Contact us test cases', () => {
  it("Should load heading from contact us the component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading", { name: "Get in Touch" })
    // Assertions

    expect(heading).toBeInTheDocument()
  })

  it("Should load the button in the component", () => {
    render(<Contact />)

    const button = screen.getByRole("button")
    // Assertions
    expect(button).toBeInTheDocument()
  })

  it("Should display working ho`urs", () => {
    render(<Contact />);

    // First find the Working Hours heading
    const workingHoursHeading = screen.getByText("Working Hours");

    // Then find the paragraph that follows it (its parent's next sibling)
    const workingHoursParagraph = workingHoursHeading.closest("div").querySelector("p");

    expect(workingHoursParagraph).toHaveTextContent("Monday - Friday: 9am - 5pm");
    expect(workingHoursParagraph).toHaveTextContent("Weekend: Closed");
  });


  test("Should not load textboxes", () => {
    render(<Contact />)

    const inputTextBoxes = screen.getAllByRole("textbox")

    expect(inputTextBoxes).not.toBe(1)
  })
})