//https://medium.com/free-code-camp/javascript-async-and-await-in-loops-30ecc5fb3939

const fruitBasket = { apple: 27,grape: 0,pear: 14 };

const fruitsToGet = ['apple', 'grape', 'pear'];

const getNumFruit = fruit => sleep(1000).then(res => fruitBasket[fruit]);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


const control = async _ => {
    console.log('Start');
    const numOfApples = await getNumFruit('apple');
    console.log(numOfApples);

    const numOfGrapes = await getNumFruit('grape');
    console.log(numOfGrapes);

    const numOfPears = await getNumFruit('pear');
    console.log(numOfPears);
}

const forLoop = async _ => {
    console.log("start");
    for(let fruit of fruitsToGet) {
        const numOfFruits = await getNumFruit(fruit);
        console.log(numOfFruits);
    }
    console.log("end");
}

//JavaScript does this because forEach is not promise-aware. It cannot support async and await. You _cannot_ use await in forEach.
const forEachLoop = async _ => {
    console.log("start");
    fruitsToGet.forEach(async fruit => {
        const numOfFruits = await getNumFruit(fruit);
        console.log(numOfFruits);
    });
    console.log("End");
}


const mapLoop = async _ => {
    console.log("start");
    const promises = await fruitsToGet.map(fruit => {
        return getNumFruit(fruit);
    });
    const numOfFruits = await Promise.all(promises);
    console.log(numOfFruits);
    console.log("end");
}

const filterLoop = async _ => {
    console.log("start");
    const promises = await fruitsToGet.map(fruit => getNumFruit(fruit));
    const numFruits = await Promise.all(promises);
    const moreThan20 = fruitsToGet.filter((fruit, index) => {
        const numFruit = numFruits[index];
        return numFruit > 20;
    });
    console.log(moreThan20);
    console.log("End");
};

// getNumFruit('apple').then(num => console.log(num));
// control();
// forLoop();
// forEachLoop();
// mapLoop();
filterLoop();
