import React from "react"
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import Related from "./Related"
import { slugify } from "../helpers/slugify"

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

const titles = [{
  book_id: 1,
  name: "Test Book Name",
}]

const author = "Test Author"

describe("Related Component", () => {
  test('should error if no props passed', () => {
    render(<Related />)
    expect(console.error).toHaveBeenCalled()
  })

  test('should render without error', () => {
    const { getByTestId } = render(<MemoryRouter><Related titles={titles} author={author} /></MemoryRouter>)

    expect(console.error).not.toHaveBeenCalled()
    expect(getByTestId("book-link").getAttribute("href")).toBe(`/book/${slugify(titles[0].name)}`)
    expect(getByTestId("book-link").textContent).toBe(titles[0].name)
  })
})
