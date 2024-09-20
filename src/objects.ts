//type
type Order =  {
    firstname: string;
    age: number;
    isValid: boolean;
    ids: (number | string)[];
    id: string;
    person: [string, number, boolean];
    people: [string, number, boolean][];
    productId?: string | number | boolean;
    direction?: Direction;
    productName?: any;
    itemId?: string;
};
type User = {
    firstname: string;
    age: number;
    isValid: boolean;
    ids: (number | string)[];
    id: string;
    person: [string, number, boolean];
    people: [string, number, boolean][];
    productId?: string | number | boolean;
    direction?: Direction;
    productName?: any;
    itemId?: string;
    orders: Order[];
};
const user: User = {
    firstname: "Gabriel",
    age: 5,
    isValid: true,
    ids: [1, 2, 3, 4, "6"],
    id: "6",
    person: ["Gabriel", 5, true],
    people: [
        ["Gabriel", 5, true],
        ["Gabriel", 5, true],
        ["Gabriel", 5, true]
    ],
    orders:[
        {
            firstname: "Gabriel",
            age: 5,
            isValid: true,
            ids: [1, 2, 3, 4, "6"],
            id: "6",
            person: ["Gabriel", 5, true],
            people: [
                ["Gabriel", 5, true],
                ["Gabriel", 5, true],
                ["Gabriel", 5, true]
            ],
            productId: "5",
            direction: Direction.up,
            productName: "Gabriel",
            itemId: "Gabriel"}
    ]
};

//Unions
type Author = {
    name: string;
    bio: string;
    books: string[];
};
const author: Author & User = {
    name: "Gabriel",
    bio: "Gabriel",
    books: ["Gabriel"],
    firstname: "Gabriel",
    age: 5,
    isValid: true,
    ids: [1, 2, 3, 4, "6"],
    id: "6",
    person: ["Gabriel", 5, true],
    people: [
        ["Gabriel", 5, true],
        ["Gabriel", 5, true],
        ["Gabriel", 5, true]
    ],
    orders:[
        {
            firstname: "Gabriel",
            age: 5,
            isValid: true,
            ids: [1, 2, 3, 4, "6"],
            id: "6",
            person: ["Gabriel", 5, true],
            people: [
                ["Gabriel", 5, true],
                ["Gabriel", 5, true],
                ["Gabriel", 5, true]
            ],
            productId: "5",
            direction: Direction.up,
            productName: "Gabriel",
            itemId: "Gabriel"}
    ]
};
//Interfacess
interface IAuthor {
    name: string;
    bio: string;
    books: string[];
}
const iAuthor: IAuthor & User = {
    name: "Gabriel",
    bio: "Gabriel",
    books: ["Gabriel"],
    firstname: "Gabriel",
    age: 5,
    isValid: true,
    ids: [1, 2, 3, 4, "6"],
    id: "6",
    person: ["Gabriel", 5, true],
    people: [
        ["Gabriel", 5, true],
        ["Gabriel", 5, true],
        ["Gabriel", 5, true]
    ],
    orders:[
        {
            firstname: "Gabriel",
            age: 5,
            isValid: true,
            ids: [1, 2, 3, 4, "6"],
            id: "6",
            person: ["Gabriel", 5, true],
            people: [
                ["Gabriel", 5, true],
                ["Gabriel", 5, true],
                ["Gabriel", 5, true]
            ],
            productId: "5",
            direction: Direction.up,
            productName: "Gabriel",
            itemId: "Gabriel"}
    ]
};
