const sum = (a,b, cb) => {
  setTimeout(() => {
    if(typeof a !== 'number' || typeof b !== 'number') 
      return cb('a, b must be number');
    
    cb(undefined, a+b)
  }, 3000);
}

const sumCallback = (error, sumResult) => {
  if(error) return console.log({ error });
  console.log({ sumResult })
}

sum(10, 'asda', sumCallback);