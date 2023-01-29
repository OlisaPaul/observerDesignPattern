module.exports = class Telephone {
  constructor() {
    // we use the new Set() to create an array of unique values.
    //this.observers is used to store the list of our observers.
    this.observers = new Set();
    this.phoneBook = new Set();
  }

  // we use this function to add our observers.
  add(observer) {
    this.observers.add(observer);
  }

  // to remove an observer from this.observers
  remove(observer) {
    this.observers.delete(observer);
  }

  // adds phone number to this.phoneBook
  addPhoneNumber(number) {
    this.phoneBook.add(number);
  }

  // removes a number from this.phoneBook
  removePhoneNumber(number) {
    this.phoneBook.delete(number);
  }

  // When this method is called, it notified the observers.
  dialPhoneNumber(number) {
    for (let observer of this.observers) {
      observer.update(number);
    }
  }
};
