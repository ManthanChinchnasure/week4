class Rectangle {
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
 
    }
 
    area() {
        const area = this.width   *  this.height;
        return area;
    }

    perimeter () {
       return this.width * this.height;
    }

    color() {
        console.log("paintaing with color " + this.color);
    }




}


class circle {
    constructor(radius){
        this.radius=radius;
    }

    area() {
        return 3.14 *this.radius * this.radius;
    }

    parimeter () {
        return 2 * 3.14 *(this.radius)
    }

    paint () {
         console.log("paintaing with color " + this.color);
    }

    
}

