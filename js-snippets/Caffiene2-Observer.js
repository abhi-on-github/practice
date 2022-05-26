var solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => {};
    }

    setEvent(fn) {
      this.event = fn;
    }

    trigger() {
      this.messages.forEach(message => this.event(message));
    }
  }

  class Receiver {
    constructor() {
      this.messages = [];
      this.pingMessages = this.ping.bind(this);
    }

    ping(message) {
        console.log(this);
      this.messages.push(message);
    }
  }

  var myEmitter = new Emitter(messages);
  var myReceiver = new Receiver();

  myEmitter.setEvent(myReceiver.pingMessages);
  myEmitter.trigger();

  return myReceiver.messages;
};

solution(["A", "B", "C"])