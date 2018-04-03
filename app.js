// Simple Gerneric
function echo(data) {
    return data;
}
console.log(echo("max").length);
console.log(echo(27));
console.log(echo({ name: "max", age: 27 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "max", age: 27 }));
// Built-in Gererics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
