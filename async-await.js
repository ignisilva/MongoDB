const sum = (a,b, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a !== 'number' || typeof b !== 'number')
        reject('a, b must be number');

      resolve(a+b);
    }, 1000)
  })
}

const totalSum = async () => {
  try{
    const result = await sum(10,10);
    const result2 = await sum(result, 10);
    console.log({ sum, result2 });
  }catch(err) {
    console.log({ err });
  }
}

console.log(totalSum());