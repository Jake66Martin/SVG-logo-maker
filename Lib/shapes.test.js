const circle = require("./circle.js")
const square = require("./square.js")
const triangle = require("./triangle.js")


describe("Shapes", () => {
  
  
    describe("circle", () => {
     it("Should create a circle with the provided shape colour (third argument)", () => {
        let triangle1 = new triangle.Triangle("ggg", "#000", "#f00")
        let svg = triangle1.render()
        expect(svg).toMatch(/#f00/)
     })
  })
})