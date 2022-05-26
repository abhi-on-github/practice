class Person{
  constructor(age){
      this.age = age;
  }

  play(){
      console.log(`the ${this.age} year old is playing`);       
  }

  getYears(){
      return this.age;
  }
}

const sam = new Person(2);
console.log(sam.age);
sam.play();


//Dynamic Access:
const fieldName = 'age';
const methodName = 'play';
console.log(sam[fieldName]);
sam[methodName]();

console.log(`Members of sam: ${Object.keys(sam)}`);

for(const property in sam){
  console.log(`Property: ${property}, value: ${sam[property]}`);
}

console.log(Object.getOwnPropertyNames(Reflect.getPrototypeOf(sam)));