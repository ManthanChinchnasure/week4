class Rectangle {
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }

    static woiam(){
        return " the way you have to define the term"
    } 
    // in static  method we call it on it class not an object  of it 
    // we directrly declare the static on class ... // console.log(Rectangle.woiam());
    // we have to not call the object in it..
    // used in singleton very specific term 

    area (){
        return this.width * this.height;
    }
      // nonstatic method wher it define the object than it called..

    perimeter(){

    }
    


}


 
let r1 = new Rectangle( 2, 4,"blue");
let r2 =  new Rectangle ( 10,  30,"yellow");
console.log(r1.area());

console.log(Rectangle.woiam());