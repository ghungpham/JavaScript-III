/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Global-binding: this automatically binds to the window, this is if it does not bind implicitly or explictly assigned to objects and others.
* 2. implicit binding: binds to the object that precedes the dot. It depends on the context, here: this.greeting inside myOnject, when invokes, myObject.greeting(), this implicityly binnded to myObject
* 3. New Binding: this binds to a function constructor (that returns an object). the "new" binds "this" attribute to the object literal that apllies the mentioned function constructor. 
* 4. explicit binding: this.apply and this.speak explicitly binds to a new context when it is applied in the function constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello (name) {
    console.log(`${this} says Hello`);
    return name;
}
sayHello("Sam");

// Principle 2

// code example for Implicit Binding

const myChanter = {
    uni: "UVA",
    sayChant: function (name) {
        console.log(`${name} let's go ${this.uni}`)
    }
}
myChanter.sayChant ('Jay:');

// Principle 3

// code example for New Binding
function myFinalfour(uni) {
    this.chant = "Let's go! ",
    this.uni = uni,
    this.speak = function() {
        console.log(this.chant + this.uni)
    }
}
const Jay = new myFinalfour('Virginia');
Jay.speak();

// Principle 4

// code example for Explicit Binding
function myChampion(attrs) {
    this.uniName = attrs.uniName,
    this.uniSeed = attrs.uniSeed,
    this.uniHometown = attrs.uniHometown,
    this.speak = function() {
        console.log(`Finally, ${this.uniName} (${this.uniSeed}) from ${this.uniHometown} has claimed the trophy`) 
    }
}
const virginia = new myChampion ({
    uniName: 'UVA',
    uniSeed: 1,
    uniHometown: 'Charlottesville'
})

// console.log(virginia);
 console.log(virginia.speak());
