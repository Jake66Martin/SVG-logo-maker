const circle = require("./circle.js")
const square = require("./square.js")
const triangle = require("./triangle.js")


describe("Shapes", () => {


   describe("circle", () => {
      it("Should check to see if a circle is what is created within SVG code", () => {
         let circle1 = new circle.Circle("ggg", "#000", "#f00")
         let svg = circle1.render()
         expect(svg).toMatch("circle")
      })

      it("Should create a circle with the provided shape colour (third argument)", () => {
         let circle1 = new circle.Circle("ggg", "#000", "#f00")
         let svg = circle1.render()
         expect(svg).toMatch(/#f00/)
      })
   })

   describe("square", () => {
      it("Should check to see if a square is what is created within SVG code", () => {
         let square1 = new square.Square("ggg", "#000", "#f00")
         let svg = square1.render()
         expect(svg).toMatch("rect")
      })

      it("Should create a square with the provided shape colour (third argument)", () => {
         let square1 = new square.Square("ggg", "#000", "#f00")
         let svg = square1.render()
         expect(svg).toMatch(/#f00/)
      })
   })

   describe("triangle", () => {
      it("Should check to see if a triangle is what is created within SVG code", () => {
         let triangle1 = new triangle.Triangle("ggg", "#000", "#f00")
         let svg = triangle1.render()
         expect(svg).toMatch("polygon")
      })

      it("Should create a triangle with the provided shape colour (third argument)", () => {
         let triangle1 = new triangle.Triangle("ggg", "#000", "#f00")
         let svg = triangle1.render()
         expect(svg).toMatch(/#f00/)
      })
   })
})

