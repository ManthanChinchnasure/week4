


  const  fs = require("fs");
/* 
  function callback (err, data){
    if(err){
        console.log( "the data is not correct ")
    } else  {
        console.log (data);
    }                                                                                        // this is a callback approach to read the file ..
}

  fs.readFile("a.txt","utf-8", callback);

  */


  function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}


  function callback(data){
    console.log(data);
  }

  function callbackerr(err){
    console.log("the data is not found yet");
  }

    //  function callback (err, data){           
    // if(err){
    //     console.log( "the data is not correct ")
    // } else  {
    //     console.log (data);
    // }}


fsReadFilePromisified("a.txt", "utf-8")
              .then(callback)
              .catch(callbackerr)