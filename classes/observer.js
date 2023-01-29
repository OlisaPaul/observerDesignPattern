// we create a new observer class with this.
module.exports = class Observer {
  constructor(name) {
    this.name = name;
  }

  // this is the function the subject calls any time it needs to send an update to the observer.
  update(context) {
    console.log(`Phone: ${context}`);
  }
};
