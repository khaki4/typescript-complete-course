// Simple Gerneric
function echo(data: any) {
    return data;
}
console.log(echo("max").length);
console.log(echo(27));
console.log(echo({name: "max", age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "max", age: 27}));

// Built-in Gererics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);

// Arrarys
function pritAll<T>(args: T[]) {
    args.forEach(((element) => console.log(element)));
}
pritAll<string>(['Apple', 'Banana'])

// Gerneric Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>('Somthing'));

// Generic Class
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<boolean>();
simpleMath.baseValue = true;
simpleMath.multiplyValue = false;
console.log(simpleMath.calculate());