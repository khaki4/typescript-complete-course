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
