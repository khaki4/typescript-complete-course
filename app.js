// Interaces and Methods
function greet(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Max',
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log('hi, I am' + this.firstName + ' ' + lastName);
    }
};
// greet({firstName: 'max', age: 27});
changeName(person);
greet(person);
person.greet('Anything');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log('hi, I am' + this.firstName + ' ' + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Maxmilian';
greet(myPerson);
myPerson.greet('Anything');
