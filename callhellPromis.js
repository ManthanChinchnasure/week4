function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
        console.log("hello");
        setTimeoutPromisified(1000).then (function () {
            console.log("....");
        });

    });
});

/*  for understanding purpose it is..

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});

*/

// it  define only form of the well structure of it .

/*
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });


*/

setTimeoutPromisified(3000)
   .then(function (){
    console.log("hi");
    return setTimeoutPromisified(1000);
   })
   .then(function (){
    console.log("hello");
    return setTimeoutPromisified(4000);
   })
   .then(function (){
    console.log("set of the data");
    
   })