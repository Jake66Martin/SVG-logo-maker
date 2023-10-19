class Triangle {
    constructor(text, textColours, shapeColours) {
        this.text =  text
        this.textColours = textColours
        this.shapeColours = shapeColours
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points = "150,0 25,175 275,175" fill="${this.shapeColours}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColours}">${this.text}</text>

</svg>`
    }
}


module.exports = {
    Triangle
}
