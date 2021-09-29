const sum = (a,b, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a !== 'number' || typeof b !== 'number')
        reject('a, b must be number');

      resolve(a+b);
    }, 3000)
  })
}

sum(10, 20)
  .then((sum) => console.log({ sum }))
  .catch((error) => console.log({ error }))