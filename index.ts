let age = 5
const firstname: string = "Gabriel";
const isValid: boolean = true;
const ids: (number | string)[] = [1, 2, 3, 4, "6"];
const id = ids[4];
if (typeof id === "string") {
    id.toLowerCase();
}
//tupla
const person: [string, number, boolean] = ["Gabriel", 5, true];
// Listas de tuplas
const people: [string, number, boolean][]=[
    ["Gabriel", 5, true],
    ["Gabriel", 5, true],
    ["Gabriel", 5, true]
]
//Intersections
const productId: string | number | boolean = "5";
//Enums
enum Direction {
    up = 1,
    down = 2,
    left = 3,
    right = 4,
}
const direction = Direction.up;
//type Assertions

const productName: any = "Gabriel";
//let itemId = (productName as number)
let itemId = <string>productName;
console.log(age);