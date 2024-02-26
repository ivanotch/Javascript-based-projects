
//object syntax
const myObject = {
    property: 'Value',
    "property with spaces": 'Value',
    "property as function": function() {
        console.log('Hello');
    },
}

// Two ways to call an object property Dot notation and Bracket notation.

//dot notation
myObject.property;

//bracket notation
myObject['property with spaces'];
myObject['property as function']();

//Object constructor - used to duplicate a specific object
function Player(name, age) {
    this.name = name;
    this.age = age
}

//you can also call a function to the object constructor
function AnotherPlayer(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, I'm " + this.name);
    }
}
//onePlayer.greet();

//to create a new object from the constructor
const newPlayer = new Player('Ivan', 40);
const anotherNewPlayer = new AnotherPlayer('John', 40);

//sample OBJECT EXERCISE

function Books(title, author, pages, read) {
    this.title = title;
    this.author - author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

const addBook = new Books('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read');
console.log(addBook.info())



