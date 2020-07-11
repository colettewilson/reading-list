import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import List from "./List"
import { slugify } from "../helpers/slugify"

afterEach(() => console.error.mockClear())

console.error = jest.fn()

const books = [{
  book_id: 1,
  cover: "test-image.jpg",
  name: "Test Book Name 1",
  author: "Author Name",
  isbn: "123"
}]

describe('List Component', () => {
  test('should error if no props passed', () => {
    render(<List />)
    expect(console.error).toHaveBeenCalled()
  })

  test('should render without error', () => {
    const { getByTestId, getAllByTestId } = render(<MemoryRouter><List books={books} /></MemoryRouter>)

    expect(console.error).not.toHaveBeenCalled()
    expect(getByTestId("book-link").getAttribute("href")).toBe(`/book/${slugify(books[0].name)}`)
    expect(getByTestId("book-name").textContent).toBe(books[0].name)
    expect(getByTestId("book-author").textContent).toBe(books[0].author)
  })
})
