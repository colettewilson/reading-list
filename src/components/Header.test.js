import React from "react"
import { MemoryRouter, Link } from "react-router-dom"
import { render, cleanup } from "@testing-library/react"
import Header from "./Header"

afterEach(cleanup)

describe("Header Component", () => {
  test("should render without error", () => {
    const { container, getByTestId } = render(<MemoryRouter><Header /></MemoryRouter>)
    const header = getByTestId('header')
    const link = getByTestId('home-link')

    expect(header).toBeInTheDocument()
    expect(header).toContainElement(link)
  })
})
