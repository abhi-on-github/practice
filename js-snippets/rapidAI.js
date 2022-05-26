const globalFruitBasket = {
  pear: 27, 
  banana: 0,
  orange: 14 
}

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// const getNumFruit = fruit => {
//   return sleep(1000).then(v => globalFruitBasket[fruit])
// }

// ================ //
// write code below //

// // no async/await
// promise.then(successCallback)


// // with async/await
// function test(){
  
//   return new Promise(resolve => resolve("test"));
// }
// async testCallTest(){
//   //promise.then(successCallback)
//   const str = await test();
//   successCallback();
// }


async function sumFruits(fruitBasket) {
  const getNumFruit = fruit => {
    return sleep(2000 * Math.random()).then(v => fruitBasket[fruit])
  }
  
//   for(let fruit of Object.keys(fruitBasket)){
//     const num = await getNumFruit(fruit);
//     console.log(num);
//   }
  
  const promises = Object.keys(fruitBasket).map(async fruit => {
    return await getNumFruit(fruit);
  })
  const data = await Promise.all(promises);
  return data.reduce((acc, num) => acc+num ,0);
}


const totalFruits = await sumFruits(globalFruitBasket);
console.log(totalFruits);