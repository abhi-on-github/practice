const add = (x, y) => x + y;

const log = func => (...args) =>{
    console.log(...args)
    return func(...args)
}

logAdd = log(add);
console.log(logAdd(4, 5));
