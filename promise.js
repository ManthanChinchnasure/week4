function setTimeoutPromisified(ms) {
  //return new Promise(resolve => setTimeout(resolve, ms)); both the condition are true in second term we define a object class of it ..
  let p = new Promise(resolve => setTimeout(resolve, ms));
  return p ;
}

function callback() {
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);
