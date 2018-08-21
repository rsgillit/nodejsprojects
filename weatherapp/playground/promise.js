var asynchAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }
      else{
        reject('Arguments must be numbers');
      }
    },1500);
  });
};

asynchAdd(5, 7)
    .then((res) => {
              console.log('Result:', res);
              return asynchAdd(res, 33);
            })
    .then((res) => {
              console.log('should be 45', res);
            })
    .catch((errorMessage) => {
              console.log('Error:', errorMessage);
            }) ;

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey, it worked!');
//     reject('Unable to fulfill promise');
//   },2500);
// });
//
// somePromise.then( (message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });
