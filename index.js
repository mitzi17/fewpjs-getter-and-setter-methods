// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    get circumference() {
        return (this.radius * 2) * Math.PI
    }

    set circumference(newCir) {
        this.radius = (newCir / 2) / Math.PI
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }

    set area(newArea) {
        this.area = (newArea / newArea) / Math.PI
    }
}

