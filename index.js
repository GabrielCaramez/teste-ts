"use strict";
let age = 5;
const firstname = "Gabriel";
const isValid = true;
const ids = [1, 2, 3, 4, "6"];
const id = ids[4];
if (typeof id === "string") {
    id.toLowerCase();
}
//tupla
const person = ["Gabriel", 5, true];
// Listas de tuplas
const people = [
    ["Gabriel", 5, true],
    ["Gabriel", 5, true],
    ["Gabriel", 5, true]
];
//Intersections
const productId = "5";
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
const direction = Direction.up;
//type Assertions
const productName = "Gabriel";
//let itemId = (productName as number)
let itemId = productName;
console.log(age);
