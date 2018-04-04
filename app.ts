function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log('Hi');
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class  Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = 'Green Plant';
}
const plant = new Plant();
(<any>plant).print();

// Method Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDecorator) {
        descriptor.writable = value;
    }
}

class Project {
    projectName: string;
    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calBuget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calBuget();
project.calBuget = function () {
    console.log(2000);
};
project.calBuget();