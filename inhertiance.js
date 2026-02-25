// in heritance the properties of parent class has to give as 
 // extends  syntx has to used . is used ...



 // super where in child class the parent class constructor has called 
 // not as 



 class Shape {
    constructor (color,depth) {
        this.color=color;
        this.depth=depth;
    }

    paint () {
        console.log(" pating with color   " + this.color);
    }

    volume (){
        return this.area()* this.depth;
    }
}

class Rectangle extends Shape { 
    constructor(width,height,color){
         super(color,depth)
        this.width=width;
        this.height=height;
        // this.color=color;   this also remove
 
    }
 
    area() {
        const area = this.width   *  this.height;
        return area;
    }

     volume (){
        return this.area()* this.depth;
    }

    perimeter () {
       return this.width * this.height;
    }



    // this also part  to have to remove..
    // paint() {
    //     console.log("paintaing with color " + this.color);
    // }

}


class circle  extends Shape {
    constructor(radius,color){
        super(color)
        // Shape.constructor(color)   not call this type of syntax.. use above of it
        this.radius=radius;
        // this.color= color;         this also
    }

    area() {
        return 3.14 *this.radius * this.radius;
    }

     volume (){
        return this.area()* this.depth;
    }

    parimeter () {
        return 2 * 3.14 *(this.radius)
    }
    
    // this part has to remove
    // paint () {
    //      console.log("paintaing with color " + this.color);
    // }

    
}

class Square  extends Shape{
    constructor(side,color){
         super(color) 
        this.side = side;
        // this.color =color;      this also to remove
    }

    area () { 
        return this.side * this.side;

    }

     volume (){
        return this.area()* this.depth;
    }

    parimeter () {
        return 4* this.side;
    }

// so this term we have to remove..
    // paint () {
    //      console.log("paintaing with color " + this.color);
    // }
     
}

// class Shape {
//     constructor (color) {
//         this.color=color;
//     }

//     paint () {
//         console.log(" pating with color   " + this.color);
//     }
// }

const r1 =  new Rectangle(10, 20 , "blue");
const r2 = new circle(20, "red");
const r3 = new Square(300, "yellow");
console.log(r1.area());
console.log(r1.paint());
console.log(r2.area());
console.log(r3.area());
console.log(r2.paint());
console.log(r3.paint());