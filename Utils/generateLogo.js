function generateLogo(response) {

if (response.shape === "Circle") {

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${response.shapeColours}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColours}">${response.text}</text>

</svg>`

} else if (response.shape === "Square") {

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect x = "75" y = "25" width = "150" height = "150" fill="${response.shapeColours}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColours}">${response.text}</text>

</svg>`

} else if (response.shape === "Trianle") {

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${response.shapeColours}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColours}">${response.text}</text>

</svg>`

}

} 

module.exports = {
    generateLogo
}