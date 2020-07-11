import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import Detail from "./Detail"

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

const book = {
  cover: "test-image.jpg",
  name: "Test Book Name",
  author: "Author Name",
  isbn: "123456"
}

describe('Detail Component', () => {
  test('should error if no props passed', () => {
    render(<Detail />)
    expect(console.error).toHaveBeenCalled()
  })

  test('should render without error', () => {
    const { getByTestId } = render(<MemoryRouter><Detail book={book} /></MemoryRouter>)

    expect(console.error).not.toHaveBeenCalled()
    expect(getByTestId("book-name").textContent).toBe(book.name)
    expect(getByTestId("book-author").textContent).toBe(`By ${book.author}`)
    expect(getByTestId("book-isbn").textContent).toBe(`ISBN: ${book.isbn}`)
    expect(getByTestId("home-link").getAttribute("href")).toBe("/")
  })
})
