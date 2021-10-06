
let i = 0

class Polygon {
    constructor(sideArr) {
        this.side = sideArr[i]
    }
    get countSides() {
      return sideArr.length
      
    }
    get perimeter() {
        reducer = (prevEl, currEl) => prevEl + currEl
        initialValue = 0
        return sideArr.reduce(reducer, initialValue)

    }
}
class Triangle extends Polygon {
    get isValid() {
     for (let  i=0; i<sideArr.length; i++) {
        if (sideArr[i] + sideArr[i+1] > sideArr[i+2]) {
            return true
        } else {
            return false
        }
     }
    
      
    }
}
class Square extends Polygon {
    get isValid() {
     if (perimeter % 4 === 0) {
         return true
     }
    }
    get area() {
         return this.side * this.side
    }
}