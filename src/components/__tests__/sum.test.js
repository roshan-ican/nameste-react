const { sum } = require("../sum")

test("Sum function add two numbers", () => {
    const result = sum(3, 4)
    // Assertion
    expect(result).toBe(7)
})