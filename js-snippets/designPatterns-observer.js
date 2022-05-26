class Event {
  constructor(){
      this.handler = new Map();
      this.count = 0;
  }
  subscribe(handler){
      this.handler.set(++this.count, handler);
      return this.count;
  }
  unscubscribe(idx){
      this.handler.delete(idx);
  }
  fire(sender, args){
      this.handler.forEach(handler => handler(sender, args));
  }
}

class Person {
  constructor(name, address){
      this.name = name;
      this.address = address;
      this.fallsIllEvent = new Event();
  }
  fallIll(){
      this.fallsIllEvent.fire(this, { address: this.address });
  }
}

class Doctor{
  constructor(name){
      this.name = name;
  }
  callMe = (person) => {
      console.log(`Dr. ${this.name} has been called to help ${person.name} at this address ${person.address}`);
  }
}

const abhishek = new Person('Abhishek', '3470 andrews dr, pleasanton, ca');
const drDipti = new Doctor('Dipti');

abhishek.fallsIllEvent.subscribe(drDipti.callMe);
abhishek.fallIll();

