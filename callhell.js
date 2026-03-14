// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("hello");

//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);


setTimeout(function (){
    console.log("hi");
    setTimeout(function (){
        console.log("hello");
        setTimeout (function () {
            console.log("....")
        },1000)
    },5000)
},3000)