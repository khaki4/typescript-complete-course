// Interaces and Classes

interface NamedPerson {
    firstName: string;
    age?: number,
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

const person = {
    firstName: 'Max',
    hobbies: ['Cooking', 'Sports'],
    greet(lastName: string) {
        console.log('hi, I am' + this.firstName + ' ' + lastName);
    }
}

// greet({firstName: 'max', age: 27});
changeName(person);
greet(person);
person.greet('Anything');

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log('hi, I am' + this.firstName + ' ' + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = 'Maxmilian';
myPerson.lastName = 'Anything';
greet(myPerson);
myPerson.greet(myPerson.lastName);
