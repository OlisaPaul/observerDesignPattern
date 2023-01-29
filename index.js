const Telephone = require("./classes/subject");
const Observer = require("./classes/observer");

// this instantiate the Telephone class which is also a Subjecct
const iPhone = new Telephone();

// This instantiate two Observers
const olisa = new Observer();
const paul = new Observer();

// To modify the inherited update function.
paul.update = function () {
  console.log("Now Dialling 2347023232");
};

// we use the add method created in the telephone class to subcribe the two observers
iPhone.add(olisa);
iPhone.add(paul);

// when we call this, an the update method in the observers is triggered
// we can see the result in the console.
iPhone.dialPhoneNumber("07067730668");
