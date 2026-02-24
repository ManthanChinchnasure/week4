class Rectangle {
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
 
    }

    area(){
        const area = this.width   *  this.height;
        return area;
    }


  // this is written by without see the video..

}

const rect = new Rectangle(4, 4)
const area = rect.area();                   // this three line i am confusion where it initalize a object..
console.log(area)











/*

// this slide code .. HR code ..

class Rectangle {
   constructor(width, height, color) {
	    this.width = width;
	    this.height = height;
	    this.color = color; 
   }
   
   area() {
	   const area = this.width * this.height;
		 return area;
   }
   
   paint() {
			console.log(`Painting with color ${this.color}`);
   }
   
}

const rect = new Rectangle(2, 4)
const area = rect.area();
console.log(area)


*/