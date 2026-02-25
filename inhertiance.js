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




}

const rect = new Rectangle(4, 4)
const area = rect.area();                
console.log(area)

