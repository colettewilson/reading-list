import React from "react"
import { render, cleanup } from "@testing-library/react"
import Loader from "./Loader"

afterEach(cleanup)

describe("Loader Component", () => {
  test("should match snapshot", () => {
    const { container } = render(<Loader />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
