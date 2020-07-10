import { slugify } from "./slugify"

test('slugify', () => {
  expect(slugify("This is a string")).toBe("this-is-a-string")
  expect(slugify(" This is also a string ")).toBe("this-is-also-a-string")
  expect(slugify("James & the Giant Peach")).toBe("james-and-the-giant-peach")
})
