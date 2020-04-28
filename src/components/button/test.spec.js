import React from "react"
import renderer from "react-test-renderer"

import Button from "."

describe("Button", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button url="/">Click Me!</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
