

/* ==  it is a synchronous code where it run excute line by line 

const fs = require("fs");

let contents = fs.readFileSync("b.txt", "utf-8");
console.log(contents);


*/


/*  === it is an asynchronous code..

const fs = require("fs");

function ReadFileload(err, c){
    console.log(c);
}

fs.readFile("b.txt", "utf-8", ReadFileload);

for (i=0 ; i< 70000000 ; i++){
    
}

*/

/*  == set Timeout funcation where how the function callback it self it deffine inn it 
function callback(){
    console.log("hi there");

}


setTimeout( callback,5*1000 );

*/