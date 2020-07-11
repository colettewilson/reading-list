import React from "react"
import axiosMock from "axios"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { render, waitForElement } from '@testing-library/react'
import reducer from "./store/reducers"
import App from "./App"

// jest.mock("axios")

afterEach(() => console.error.mockClear())

console.error = jest.fn()

// const CancelToken = axiosMock.CancelToken
// const source = CancelToken.source()

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

  // test("should display loader before promise returns", () => {
  //   const { getByTestId } = renderWithRedux(<App />)
  //   expect(getByTestId("loader")).toBeTruthy()
  // })

  // test("should display loader before promise returns", async () => {
  //   axiosMock.get(url, { cancelToken: source.token })
  //   const { getByTestId, queryByTestId } = renderWithRedux(<App />)

  //   await waitForElement(() => { getByTestId("content") })

  //   expect(axiosMock.get).toHaveBeenCalledTimes(1)
  //   expect(queryByTestId("loader")).toBeFalsy()
  // })
})

