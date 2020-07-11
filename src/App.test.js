import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { render, waitForElement } from '@testing-library/react'
import reducer from "./store/reducers"
import App from "./App"

global.fetch = require("jest-fetch-mock")

afterEach(() => console.error.mockClear())

console.error = jest.fn()

const initialState = {
  isLoading: true,
  bookList: []
}

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

const books = {
  books: [{
    cover: "test-image.jpg",
    name: "Test Book Name",
    author: "Author Name",
    isbn: "123456"
  }]
}

describe("App Component", () => {

  test("renders with Redux", () => {
    renderWithRedux(<App />)
  })

  test("should display loader before promise returns", () => {
    const { getByTestId } = renderWithRedux(<App />)
    expect(getByTestId("loader")).toBeTruthy()
  })

  test("should display loader before promise returns", async () => {
    fetch.mockResponseOnce(JSON.stringify(books))
    const { getByTestId, queryByTestId } = renderWithRedux(<App />)

    // await waitForElement(() => { getByTestId("content") })
    // expect(queryByTestId("loader")).toBeFalsy()
  })
})

