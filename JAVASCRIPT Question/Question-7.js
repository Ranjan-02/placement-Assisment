const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    // If successful, call resolve(value)
    // If error occurs, call reject(error)
  });
  
  myPromise
    .then((value) => {
      // Promise fulfilled
      // Handle the resolved value
    })
    .catch((error) => {
      // Promise rejected
      // Handle the error
    });
  