// primary and the non primary datatypes 

// primary = string ,int , number , bigint , null ,undefined hekko 

const id1 = Symbol(123)
const id2 = Symbol(123)
console.log(id1==id2)
const opinion = Symbol(1234)
const oionion = Symbol(1234)
console.log(opinion==oionion)


// In JavaScript, the Symbol is a primitive data type introduced 
// in ES6 (ECMAScript 2015). Symbols are used to create unique and immutable 
// identifiers, most commonly as keys for object properties to avoid property name
//  collisions and to create "hidden" or private object properties